import React, { Component } from 'react';
import MyComponent from './myComponent.js';
import './App.css';

// 클래스형 Component
class App extends Component {
  render() {
    const name = 'react123';
    return (
      <MyComponent>{name}</MyComponent>
    )
  }
}

// 함수형 Component
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
//           <MyComponent />
//           {name}
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
