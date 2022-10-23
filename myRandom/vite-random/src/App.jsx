import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyRoulette from './component/MyRoulette'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyRoulette></MyRoulette>
    </div>
  )
}

export default App
