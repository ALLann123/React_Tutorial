
function CheckboxField({label, name, checked, onChange, error}){
    return (
        <div className="field">
            <label className="checkbox-row" htmlFor={name}>
            <input 
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            {label}
            </label>
            {error && <p className="error-text">{error}</p>}
        </div>
    )
}

export default CheckboxField;