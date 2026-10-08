//StatusMessage shows a short message for every situation EXCEPT a successfull result
//Props:
//   status- "idle", "loading", "empty", "error", "success"
//   message- the error text(only used when status is "error")
function StatusMessage({status, message}){
    //A component can return early, each if picks one message and stops
    if(status==="idle"){
        return <p className="message">Enter an Artist and a song to find its lyrics.</p>
    }

    if(status==="loading"){
        return(
            <p className="message" role="status">
                Searching for lyrics....
            </p>
        );
    }

    //search worked, but nothing matched
    if(status==="empty"){
        return(
            <p className="message" role="status">
                No lyrics found. Check the spelling, or try a shorter song title.
            </p>
        );
    }

    if(status==="error"){
        //role="alert" makes screen readers announce the error right away
        return(
            <p className="message message-error" role="alert">
                {message}
            </p>
        );
    }

    //For success there is nothing to say. 
    return null;
}

export default StatusMessage;