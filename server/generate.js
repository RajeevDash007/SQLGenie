import openaiClient from "./api.js";

const generate = async(queryDescription) => {
    const response = await openaiClient.createCompletion({
        model:"text-davinci-003",
        prompt: `Convert the natural language description into a SQL query: ${queryDescription}`,
        max_tokens: 100,
        temperature: 0
    })
    return response.data.choices[0].text
}

export default generate