import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EventPractice from './event_f/EventPractice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <EventPractice></EventPractice>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
