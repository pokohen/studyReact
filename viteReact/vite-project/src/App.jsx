import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({
    username : '',
    message : ''
  })
  const {username, message} = form
  const onChange = e => {
    console.log(e.target.value)
    console.log(e.target.name)
    const nextForm = {
      ...form, //기존의 form 내용을 복사
      [e.target.name] : e.target.value
    } 
    setForm(nextForm)
  }

  const onClick = () => {
    alert(`${username} : ${message}`)
    setForm({
      username : '',
      message : ''
    })
  }

  const onKeyPress = e => {
    if(e.key === 'Enter') onClick();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          vite 만드는 법<br/>
          1. yarn install vite<br/>
          2. 글 나온대로 치기<br/>
          2-1. 만든 repo로 이동<br/>
          2-2. yarn 클릭<br/>
          2-3. yarn dev<br/>
        </p>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <input
          type="text"
          name="username"
          palceholder="사용자명"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          palceholder="아무거나 입력해 보세요"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs Docs Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
