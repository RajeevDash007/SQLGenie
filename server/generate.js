import dotenv from "dotenv";
const generate = async (queryDescription) => {
  const bardAPI = async (queryDescription) => {
    const inputText = `Give only sql code of: ${queryDescription}`; // Add desired prefix
    const response = await fetch("https://api.bardapi.dev/chat", {
      headers: { Authorization: `Bearer ${API_KEY}`,
      method: "POST",
      body: JSON.stringify({ input: inputText }),
    });
    const data = await response.json();
    return data.output;
  };

  const sqlQuery = await bardAPI(queryDescription);
  return sqlQuery;
};

export default generate;