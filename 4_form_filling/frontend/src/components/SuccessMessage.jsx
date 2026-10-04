
function SuccessMessage({name, onReset}){
    return (
        <div className="success">
            <h2>You're in, {name}!</h2>
            <p>Your Account has been created</p>
            <button type="button" className="link-button" onClick={onReset}>
                Fill the Form again
            </button>
        </div>
    );
}

export default SuccessMessage;