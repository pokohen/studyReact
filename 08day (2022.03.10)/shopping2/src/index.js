import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
// router 적용시키기, 라이브러리 이름 넣기 이후 App 감싸주기
// BrowserRouter -> 서버에 전송 바로 하기
// HashRouter -> 라우팅 안전하게 할 수 있게 도와준다 # 기호가 들어가면 서버에 들어가지 않음

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
