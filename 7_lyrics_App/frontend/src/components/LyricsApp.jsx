import { useState } from "react";
import SearchForm from "./SearchForm";
import StatusMessage from "./StatusMessage";
import MatchList from "./MatchList";
import LyricsView from "./LyricsView";
import {searchLyrics} from "../lyricsApi"

//LyricsApp is the brain and owns the state and does the searching
function LyricsApp(){
    //---------STATE-------------
    //The list of matching tracks from the last search
    const [matches, setMatches]=useState([]);

    //Which match is currently show(its position in the list, starting at 0)
    const [selectedIndex, setSelectedIndex]=useState(0);

    //Where are we in the search
    const [status, setStatus]=useState("idle");

    //error text
    const [errorMessage, setErrorMessage]=useState("");

    //-----------DERVIED VALUE------------
    //The track to display is worked out from two pieces of state
    const selectedTrack=matches[selectedIndex];


    //SearchForm calls this with the artist and the song
    async function handleSearch(artist, song){
        setStatus("loading");
        setErrorMessage("");

        //try/catch: if anything inside "try" throws an error
        //JavaScript jumps to "catch" instead of crashin the app
        try{
            //"await" pauses THIS function until the answer arrives
            const results=await searchLyrics(artist, song);

            setMatches(results);

            setSelectedIndex(0);  //always start on the best match

            setStatus(results.length===0?"empty":"success");
        } catch(error){
            setErrorMessage(error.message);
            setStatus("error");
        }
    }

    return(
        <div className="lyrics-app">
            <h1>Lyrics Finder</h1>

            <SearchForm onSearch={handleSearch} disabled={status==="loading"}/>

            <StatusMessage status={status} message={errorMessage}/>

            {status==="success"&&(
                <>
                    <MatchList
                        matches={matches}
                        selectedIndex={selectedIndex}
                        onSelect={setSelectedIndex}
                    />

                    <LyricsView track={selectedTrack}/>
                </>
            )}
        </div>
    );
}

export default LyricsApp;