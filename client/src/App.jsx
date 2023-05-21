import styles from './index.module.css'
import {useState} from  'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("")

  return (
    <main className={styles.main}>
      <img src='https://cdn-icons-png.flaticon.com/128/4492/4492311.png' alt='Sql image' className={styles.icon}/>
      <h3>Instant AI-generated SQL code!</h3>

      <form>
        <input
          type='text'
          name='query-description'
          placeholder='Provide an explanation of your query.'
          onChange={(e) => setQueryDescription(e.target.value)}
        />

        <input type='submit' value="Craft query" />
      </form>
    </main>
  )
}

export default App
