import styles from './index.module.css'
import {useState} from  'react'

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const query = await generateQuery();
    setSqlQuery(query);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3002/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: userPrompt }),
    });

    const data = await response.json();
    return data.sqlQuery.trim();
  };

  return (
    <main className={styles.main}>
      <img src='https://cdn-icons-png.flaticon.com/128/4492/4492311.png' alt='Sql image' className={styles.icon}/>
      <h3>Instant AI-generated SQL code!</h3>

      <form onSubmit={onSubmit}>
        <textarea
          name="query-description"
          placeholder="Give a brief explanation of your query"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <input type="submit" value="Craft your query" />
      </form>
      <pre>{sqlQuery}</pre>
    </main>
  )
}

export default App
