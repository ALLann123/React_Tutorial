export async function llmResponse(humanInput) {
    try {
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: humanInput
            })
        });

        if (!response.ok) {
            throw new Error("Backend request failed")
        }

        const data = await response.json();

        return data.response
    } catch (error) {
        console.error(error);
        throw new Error("Could not reach the language model!");
    }
}