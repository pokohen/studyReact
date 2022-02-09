import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';

  // 변수에 데이터를 넣는가
  // state에 데이터를 넣는가 -> useState를 사용하는 것을 위에 선언해주어야함

  // useSatate를 사용하게 되면 -> [a, b] 가 생성된다 -> a는 적은 값, b는 a를 수정 가능한 값
  // ES6 destructuring 문법을 사용해서 값을 각각 저장이 가능하다.
  // array형태로도 저장이 가능하다
  let [content_title, change_content_title] = useState(['남자 코트 추천', '강남 우동 맛집']);

  // state에 데이터 저장해놓는 이유 - 웹이 App처럼 동작하게 만들고 싶어서
  // state가 변경되면 HTML이 자동으로 재렌더링이 된다 -> 새로고침 없이 스무스 하게

  let [work1, change_work1] = useState('react 강의');
  let [work2, change_work2] = useState('잠이 오는 시간대');
  let [work3, change_work3] = useState('정처리 공부도 한다');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { posts } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { content_title[0] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { change_content_title = 'a' } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { work1 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { work2 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { work3 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    
    </div>
  );
}

export default App;
