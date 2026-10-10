#!/usr/bin/python3
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
import os

# load env variables
load_dotenv()

# create flask App
app=Flask(__name__)

# allow requests from our React frontend
CORS(app)

# Create the Groq model
model = ChatGroq(
    model="openai/gpt-oss-120b",
    temperature=0,
    api_key=os.getenv("GROQ_API_KEY")
)

# chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    # Get JSON sent by react
    data=request.get_json()

    # Extract user's message
    human_input=data.get("message")

    # check that message was provided
    if not human_input:
        return jsonify({
            "error":"No message provided"
        }), 400

    try:
        # Send message to groq
        response=model.invoke([
            HumanMessage(content=human_input)
        ])

        # send response back to react]
        return jsonify({
            "response":response.content
        })

    except Exception as e:
        return jsonify({
            "error":str(e)
        }), 500

# RUn flask Server
if __name__=="__main__":
    app.run(debug=True, port=5000)