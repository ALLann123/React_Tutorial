import { useState } from "react";

// Collects city name and hands it to the parent
// Does NOT fetch anything itself. That is the parents job
//Props:
//  onSearch-> function to call with the city name when the form is submitted
//  disabled-> set to true when the search is in progress. Prevent the button from being spammed

function SearchBox({onSearch, disabled}){
    //The text currently in the input. "Controlled input":
    // the input always shows this state, and typing updates this state
    const [city, setCity]=useState("");
    
    function handleSubmit(event){
        //Stop browser from reloading page when the form is submited
        event.preventDefault();

        //trim() removes spaces at the start and end. 
        const cleanCity=city.trim();

        //if nothing is left, do nothing
        if(cleanCity===""){
            return;
        }

        //Send the city UP to the parent. Keep the text in the box
        //so if the spelling was wrong the user can fix it instead of retyping
        onSearch(cleanCity)
    }

    return(
        <form className="search-box" onSubmit={handleSubmit}>
            <label htmlFor="city">City name</label>
            <div className="search-row">
                <input
                 type="text"
                 id="city"
                 value={city}
                 onChange={(event)=>setCity(event.target.value)}
                 placeholder="Example: london"
                 autoComplete="off"
                />

                <button type="submit" disabled={disabled}>
                    {/*Show different button text depending on the disabled prop */}
                    {disabled?"Searching...":"Search"}
                </button>
            </div>
        </form>
    );
}

export default SearchBox;