import { useState } from "react";
import SearchBox from "./SearchBox";
import StatusMessage from "./StatusMessage";
import InfoBox from "./InfoBox";
import { fetchWeather } from "../weatherApi";

//WeatherApp: is the "brain". it owns the state and does the fetching
//The three child components only show things or collect input
function WeatherApp(){
    //-----STATE-------
    //The latest weather result. null means. We have nothing o show yet
    const [weather, setWeather]=useState(null);

    //Where are we in the search? idle, loading, success, error
    const [status, setStatus]=useState("idle");

    //the error text to show when status is error
    const [errorMessage, setErrorMessage]=useState("");

    //-----EVENT HANDLER--------
    //SearchBox calls this function with the ciy name.
    //It is async because it uses await to wait for the network request
    async function handleSearch(city){
        setStatus("loading");
        setErrorMessage("");
        
        //try/catch: run the code in try if anyhing insdie thows an error
        //JS will jump to catch error incase app crashes
        try{
            //"await" pauses this until data arrives
            const data=await fetchWeather(city);
            setWeather(data);
            setStatus("success");
        }catch(error){
            //error.message is the friendly text we wrote in weatherApi.js]
            setErrorMessage(error.message);
            setStatus("error");
        }
    }

    //-----WHAT TO DRAW-----
    return (
        <div className="weather-app">
            <h1>Weather</h1>

            <SearchBox onSearch={handleSearch} disabled={status==="loading"}/>
            <StatusMessage status={status} message={errorMessage}/>

            {/*Only draw the card after successful search */}
            {status==="success" && <InfoBox weather={weather}/>}
        </div>
    );
}

export default WeatherApp;