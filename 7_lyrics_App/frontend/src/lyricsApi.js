//Has no component
// Talk to the LRCLIB lyrics service and return clean data
// Components never need to know how lyrics is fetched.
//LRCLIB needs an artist and song title
const API_URL = "https://lrclib.net/api/search";

//Introduce yourself
const CLIENT_NAME = "LyricsFinder v1.0 (learning project)";


//API can return up to 20 matches. Keep few
const MAX_RESULTS = 5;

// A track is worth showing if it is instrumental(show a note),
//or if it really has lyrics text
function hasContent(track) {
    return track.instrumental || (track.plainLyrics && track.plainLyrics.trim() !== "")
}

//"async" means this function waits for a network request and returns a promis
export async function searchLyrics(artist, song) {
    //URLSearchParams builds our request and conversta spaces and special characters for us
    const params = new URLSearchParams({
        track_name: song,
        artist_name: artist,
    });

    const url = `${API_URL}?${params}`;

    //browser sends first an invisible "permission check" request(called a preflight)
    let response;
    try {
        response = await fetch(url, {
            headers: { "Lrclib-Client": CLIENT_NAME }
        });
    } catch {
        //fetch() only throws when network itself fails
        throw new Error("Could not reach the lyrics service. Check internet connection");
    }

    if (response.status === 429) {
        throw new Error("Too many requests. Wait a moment and try again.");
    }
    if (response.status === 503) {
        throw new Error("The lyrics service is busy right now. Try again in a moment.");
    }
    // Remember: response.ok (not response.status.ok) is true for statuses 200 to 299.
    if (!response.ok) {
        throw new Error(`Something went wrong (error ${response.status}).`);
    }

    //Get the object
    const data = await response.json();

    return data
        .filter(hasContent) // drop tracks that have no lyrics at all
        .slice(0, MAX_RESULTS) // keep only the first few
        .map((track) => ({
            // Keep only what our app needs, with friendly names.
            // ?? means "use the value on the right if the left one is null".
            id: track.id,
            title: track.trackName ?? "Unknown title",
            artist: track.artistName ?? "Unknown artist",
            album: track.albumName ?? "",
            instrumental: track.instrumental,
            lyrics: track.plainLyrics ?? "",
        }));


}