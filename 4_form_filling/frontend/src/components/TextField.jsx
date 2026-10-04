

function TextField({label, name, type="text", value, onChange, error}){
    return (
        <div className="field">
            <label htmlFor={name}>{label}</label>
            <input 
                type= {type}
                id={name}
                value={value}
                name={name}
                onChange={onChange}
                className={error ? "input-error":""}
                aria-invalid={error?"true":"false"}
            />

            {error && <p className="error-text">{error}</p>}
        </div>
    )
}

export default TextField;
