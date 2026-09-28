import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
    configuration: {
        baseURL: "https://api.puter.com/puterai/openai/v1/",
    },
    apiKey: "eyJhb.............",
    model: "gpt-4o-mini",
})

const response = await llm.invoke("Hello World");
console.log(response.content);