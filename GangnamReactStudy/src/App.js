import React, { Component } from 'react';
import myComponent from './myComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        <h1>{name}</h1>
        <myComponent></myComponent>
      </div>
    )
  }
}



// function App() {
//   const name = 'Learn React 123';
//   const test_name = 'test';
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         { /* 삼항 다항식이 아닌 아랫처럼 표현해도 가능하다. */ }
//         { test_name === 'test' && <h1>문법문법</h1> }
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {name}
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
