import './App.css'
import ChatBot from 'react-chatbotify'
import { llmResponse } from './llmHit'

function App() {
  const flow={
    "start":{
      "message":"Hello, How can I help?☺",

      //When the user sends a message, call the flask backend
      path:"chat"
    },

    chat:{
      message:async(params)=>{
        //Get the users message
        const userMessage=params.userInput

        // send to flask
        const response=await llmResponse(userMessage)

        //Return to chatbot
        return response
      },

      //keep using the chat node
      path:"chat"
    }
  }

  return (
    <>
     <ChatBot flow={flow}/>
    </>
  );
}

export default App;
