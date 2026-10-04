import { useState } from "react";
import TextField from "./TextField";
import CheckboxField from "./CheckboxField";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";

const emptyForm={
    fullname:"",
    email:"",
    password:"",
    agree:false
};

function validate(values){
    const errors={};

    if(!values.fullname.trim()){
        errors.fullname="Enter your full name";
    }

    if(!values.email.trim()){
        errors.email="Enter your email address";
    }else if(!/^\S+@\S+\.\S+$/.test(values.email)){
        errors.email="Enter an email like name@example.com";
    }

    if(values.password.length<8){
        errors.password="Use at least 8 characters.";
    }

    if(!values.agree){
        errors.agree="Accept the terms to continue";
    }

    return errors;
}

function RegistrationForm(){
    const [values, setValues]=useState(emptyForm);
    const [errors, setErrors]=useState({});
    const [submitted, setSubmitted]=useState(false);

    function handleChange(event){
        const {name, type, value, checked}=event.target;

        setValues({
            ...values,
            [name]: type==="checkbox"?checked:value,
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        const foundErrors=validate(values);
        setErrors(foundErrors);

        if(Object.keys(foundErrors).length===0){
            setSubmitted(true);
        }
    }

    function handleReset(){
        setValues(emptyForm);
        setErrors({});
        setSubmitted(false);
    }

    if(submitted){
        return <SuccessMessage name={values.fullname} onReset={handleReset}/>;
    }

    return(
        <form onSubmit={handleSubmit} noValidate>
            <h1>Create Your Account</h1>

            <TextField
                label="Full name"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                error={errors.fullname}
            />

            <TextField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
            />

            <TextField
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
            />

            <CheckboxField
                label="I agree to the terms"
                name="agree"
                checked={values.agree}
                onChange={handleChange}
                error={errors.agree}
            />

            <SubmitButton text="Create account"/>
        </form>
    )
}

export default RegistrationForm;