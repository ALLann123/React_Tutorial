//Get the input and button
const inputField = document.getElementById('myInput');
const button = document.getElementById('myButton');
//const src = "https://js.puter.com/v2/";

//Add an event listener to the button
button.addEventListener('click', function() {
    //Get the value entered in the text field
    const userData = inputField.value;
    puter.ai.chat(userData, {
        model: "gpt-4o" //free tier model
    }).then(response => {
        document.getElementById('aiMessage').innerHTML =
            `AI: ${response}`
    });
})