//Plain JS file not component
//Queries the weather API
//Keep separate so our components never need to know HOW data is fetched
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

//"export" lets other files import this function
//"async" the function does slow work(network request) and returns a promise
// promise-> result that will arrive later. Callers use await to wait for result
export async function fetchWeather(city) {
    //Vite copies variables that start with VITE_ from your .env.local file into
    //import.meta.env if the key is missing, we stop early with a helpful message
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
        throw new Error(
            "No API key found. Create a file named .env.local containing VITE_API_KEY=your_key, then restart npm run dev."
        );
    }

    //Build our request. encodeURIComponent makes the city safe to put in a URL
    //units=metric asks the API for celsius and meters per second
    const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    //fetch() sends the network request. Throws error when network itself fails
    //(no internet, blocked request), so we catch that case separately
    let response;
    try {
        response = await fetch(url);
    } catch {
        //We dont need the error details here, so we leave out the (error) part.
        throw new Error("Could not reach the weather service. Check your internet connection.");
    }

    //if the server answered but with a problem, status code tells us what happened
    if (response.status === 404) {
        throw new Error("City not found. Check the spelling and try again.");
    }

    if (response.status === 401) {
        throw new Error(
            "The API key was rejected. New keys can take up to a couple of hours to start working. Also check the key in .env.local."
        );
    }

    if (response.status === 429) {
        throw new Error("Too many requests. Wait a minute and try again.");
    }

    //response.ok is true for any status from 200 to 299
    if (!response.ok) {
        throw new Error(`Something went wrong (error ${response.status}).`);
    }

    //Turn the response received to a JS object
    const data = await response.json();

    //Pick up the information we only need
    return {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        condition: data.weather[0].main, // short word, like "Rain" or "Clouds"
        description: data.weather[0].description, // longer text, like "light rain"
        icon: data.weather[0].icon, // a code, like "10d", used to build the icon URL
    };
}