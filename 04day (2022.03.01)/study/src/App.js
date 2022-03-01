import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  let content_list = [];
  let [content_title1, change_content_title1] = useState(['남자 코트 추천', '강남 우동 맛집', '리엑트 맛집']);

  // onoff 스위치 -> 상태에 따라서 보이게 하는 방법
  let [modal, change_modal] = useState(false);

  function change_content(){
    content_list = [...content_title1];
    content_list[0] = '여자 코트 추천';
    change_content_title1(content_list);
  }

  function open_modal(){
    // 내 답변
    // modal? change_modal(false) : change_modal(true);
    // 모범 답변
    // boolean 이잖어~
    change_modal(!modal);
  }

  // 모달창 만들기
  // 연속적인 div 사용
  // 리엑트의 conponent 문법

  let [like_count, change_like_count] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ change_content }>버튼</button>
      <div className="list"> 
        <h3> { posts } <span onClick={ () => { change_like_count(like_count + 1) } }>👍</span> { like_count } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { content_title1[0] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { content_title1[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3 onClick={ open_modal }> { content_title1[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <button onClick={ open_modal }>숙제</button>
      
      {
        // if문은 바로 적을 수 없으므로 삼항 연산자를 적어야 한다.
        // react는 변수 뿐만 아니라 {} 안에 javascript 구문을 넣을 수 있다
        // 세미콜론(;)도 사용할 수 없다
        modal === true? <Modal /> : null
      }

    </div>

    // return 안에는 div가 연속적으로 존재할 수 없다
  );
}

// component 자리 - function App과 나란히 적으면 된다
// component 안에 또다른 component를 만들 수 있다
// component 유의사항
// 항상 대문자로 시작
// 아까 적은 듯이 div는 나란히 존재할 수 없다
// 만약에 div를 여러개 쓰고 싶다면 빈 <> 를 하나 만들어 싸면 된다 - fragments

// 만드는 시기
// 하나의 페이지를 만들 때
// 반복 출현하는 덩어리들
// 자주 변경되는 UI들 

// 많이 만드면 단점 -> state 쓸 때 복잡해짐 -> 단순히 적게 되면 되지 않음
// 상위 component에서 만든 state 쓰려면 props 문법 이용해야함

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// 클릭하면 나타나게 - 글 제목을 누르면 나타나게


export default App;
