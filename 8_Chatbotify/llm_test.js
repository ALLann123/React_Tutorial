//create our llm
import { ChatGroq } from "@langchain/groq"
import { HumanMessage, SystemMessage } from "@langchain/core/messages"

//Initialize the LLM
const model = new ChatGroq({
    model: 'openai/gpt-oss-120b',
    temperature: 0,
    apiKey: 'gsk......'
});


//Send message to LLM
async function conversation(humanInput) {
    //Pass the human Input to the llm as Human Message
    const response = await model.invoke([new HumanMessage(humanInput)]);

    return response.content;
}


//call the LLM
const humanInput = "Hello, define python in one sentence";
const result = await conversation(humanInput);

console.log(`AI: ${result}`);

/*
AI: Python is a high‑level, interpreted programming language known for its readability, dynamic typing, and extensive standard library that supports multiple programming paradigms.

*/