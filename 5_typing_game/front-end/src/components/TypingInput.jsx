import { useEffect, useRef } from "react";

//TypingInput is the box where the player types
//Props:
//value- current typed text(comes from state in TypingGame)
//onChange - function to call on every keystroke
//disabled-true when the round is over, so typing is locked.

function TypingInput({value, onChange, disabled}){
    //useRef gives us a direct handle to the real <input> element in the page.
    //We start with null, and React fills it in once the input exists.
    const inputRef=useRef(null);

    //useEffect runs code AFTER the screen has been drawn
    //Here it puts the cursor in the box automatically. The list at the end
    //([disabled]) means "run again whenever `disabled` changes". That is how the
    //box gets focus again when a new round starts.
    useEffect(()=>{
        if(disabled){
            inputRef.current.focus();
        }
    }, [disabled]);

    //Block pasting so the player has to actually type the text
    function handlePaste(event){
        event.preventDefault();
    }

    return (
        <input
         type="text" 
         ref={inputRef}//connects inputRef to this element
         className="typing-input"
         value={value}//controlled input: the value always comes from state
         onChange={onChange}
         onPaste={handlePaste}
         disabled={disabled}
         placeholder="Start typing here"
         spellCheck="false"
         autoComplete="off"
         autoCorrect="off"
         autoCapitalize="off"
        />
    )
}

export default TypingInput; 