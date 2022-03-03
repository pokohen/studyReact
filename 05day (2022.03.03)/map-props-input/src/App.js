/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [content_title1, change_content_title1] = useState(['남자 코트 추천', '강남 우동 맛집', '리엑트 맛집']);
  
  // 각각 부분 모달 넣기 
  let full_content = [];
  
  content_title1.map((content_title)=>{
    var content_object = {
      'title' : content_title,
      'modal' : false,
      'like_num' : 0
    }
    full_content.push(content_object);
  });

  let [contents, change_contents] = useState(full_content);

  const like_up_up = function(index) { 
    var emp = [...contents];
    emp[index].like_num = emp[index].like_num + 1;
    change_contents(emp);
  }

  const open_modal_modal = function(index) { 
    var emp = [...contents];
    // 다른 모달 창 닫기
    emp.map((content)=>{ content.modal = false });
    emp[index].modal = !emp[index].modal;
    change_contents(emp);
  }


  let [like_count, change_like_count] = useState([0, 0, 0]);
  let arr1 = ['apple', 'banana', 'creep'];
  let [modal, change_modal] = useState(false);
  
  // 변경한 prop 주기
  let [push_num, change_push_num] = useState(0);

  let like_up = (index)=>{
    var emp_like = [...like_count];
    emp_like[index]++;
    change_like_count(emp_like);
  }

  let open_modal = function(){
    change_modal(!modal);
  }

  let arr2 = arr1.map((a)=>{ return a + '123'; })

  // 기본적으로 반복문은 이렇게 적는데,,, 단순한 반복이라면 map을 사용하는게 훨씬 좋아보인다
  function repeatUI() {
    var arr = [];
    for( var i = 0; i < 3; i++){
      arr.push(<div>안녕</div>)
    }
    return arr;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
    {
    // JSX 중괄호 내에 for문 등은 넣을 수 없고, 변수명 함수명 등만 넣을 수 있다
    // map 함수를 쓴느 것이 좋다
    // 좋아요 따로 올리는 방법 찾아보기
    // 각자 모달을 나오기 위해 object로 만들었다. 그 후, 좋아요도 따로 저장해서 소환했다.
      contents.map((content, index)=>{
        return (
          // 최상위에 key값이 없을 경우, key 값 에러('경고'이지만) 나타난다!
          <div key={content.title} className="list"> 
            <h3 onClick={ () => { open_modal_modal(index) } }>{ content.title }<span onClick={ () => { like_up_up(index) } }>👍</span> { content.like_num } </h3>
            <p>2월 17일 발행</p>
            <hr/>
            { content.modal? (<Modal title={content.title} ></Modal>) : null }
            
          </div>
          )
      })
    }
    <button onClick={ () => { change_push_num(0) }} >button1</button>
    <button onClick={ () => { change_push_num(1) }} >button2</button>
    <button onClick={ () => { change_push_num(2)} } >button3</button>

    {
      <Modal2 content_title1={content_title1} push_num={push_num}></Modal2>
    }

    </div>

  );
}

// app 이라는 component(부모) 안에 modal 이라는 component(자식)를 넣어두었다
// props로 자식에게 state를 전해주는 법
// app 안에 있는 자식 component에게 작명={state명}으로 적어서 보내주기
// 자식에게 props 파라미터 입력 후 사용
function Modal(props) {
  return (
    <div className='modal'>
      <h2>{ props.title }</h2>
      <p>2월 17일</p>
      <p>상세내용</p>
    </div>
  )
}
function Modal2(props) {
  return (
    <div className='modal'>
      <h2>{ props.content_title1[props.push_num] }</h2>
      <p>2월 17일</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
