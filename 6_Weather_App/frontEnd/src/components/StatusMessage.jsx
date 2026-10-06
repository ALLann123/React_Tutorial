//StatusMessage shows a short message for every situation EXCEPT a successful result
//Props:
//  status: one of idle, loading, error, or success
// message: the error text (only used when status is error)

function StatusMessage({status, message}){
    //A component can return early. Each if below picks one message and stops
    if(status==="idle"){
        return <p className="message">Search for a city to see its weather.</p>;
    }

    if (status==="loading"){
        return (
            <p className="message" role="status">
                Loading weather.....
            </p>
        );
    }

    if(status==="error"){
        //role="alert" makes screen readers announce the error right away
        return(
            <p className="message" role="alert">
                {message}
            </p>
        );
    }

    //For "success" there is nothing to sa.
    return null;
}

export default StatusMessage;