import { useState } from "react";

//Collects artist and a song title then hands them to the parents
//Props:
//   onSearch-function to call with(artist, song) when the form is submitted
//   disabled= true while a search is running so the button can't be spammed
function SearchForm({onSearch, disabled}){
    //One state object holds both inputs, like the registration form
    const [values, setValues]=useState({artist:"", song:""});

    //One handler for both inputs. It works because each input's name attribute
    function handleChange(event){
        const {name, value}=event.target;
        setValues({...values,[name]:value});
    }

    function handleSubmit(event){
        //stop the browser from reloading the page
        event.preventDefault();

        //trim() removes trailing spaces
        const artist=values.artist.trim();
        const song=values.song.trim();

        //if either box is empy, do nothing
        if(artist==="" || song===""){
            return;
        }


        //send both values up to the parent
        onSearch(artist, song);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="field">
                    <label htmlFor="artist">Artist</label>
                        {/*required---> This force the browser refuse to submit an empty box*/}
                    <input
                     type="text"
                     id="artist"
                     name="artist"
                     value={values.artist}
                     onChange={handleChange}
                     placeholder="For example: Adele"
                     autoComplete="off"
                     required 
                    />
                </div>
                <div className="field">
                    <label htmlFor="song">Song title</label>
                    <input
                     type="text"
                     name="song"
                     value={values.song}
                     onChange={handleChange}
                     placeholder="For example: Hello"
                     autoComplete="off"
                     required
                    />
                </div>
            </div>

            <button type="submit" disabled={disabled}>
                {/*Show different text depending on the disabled prop */}
                {disabled?"Searching..." :"Find lyrics"}
            </button>
        </form>
    );
}

export default SearchForm;