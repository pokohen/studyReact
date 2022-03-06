/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [content_title1, change_content_title1] = useState(['남자 코트 추천', '강남 우동 맛집', '리엑트 맛집']);
  
  let full_content = [];
  let today_date  = new Date();
  const date_option = { weekday : 'long', year: 'numeric', month: 'long', day: 'numeric'};
  
  content_title1.map((content_title)=>{
    var content_object = {
      'title' : content_title,
      'date'  : today_date.toLocaleDateString('en-US', date_option),
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
    emp.map((content)=>{ content.modal = false });
    emp[index].modal = !emp[index].modal;
    change_contents(emp);
  }


  let [like_count, change_like_count] = useState([0, 0, 0]);
  let arr1 = ['apple', 'banana', 'creep'];
  let [modal, change_modal] = useState(false);
  
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

  function repeatUI() {
    var arr = [];
    for( var i = 0; i < 3; i++){
      arr.push(<div>안녕</div>)
    }
    return arr;
  }

  // input 값 저장하기
  // 먼저 빈 state 하나를 만든다.
  // 현재는 페이지에서만 저장을 하지만
  // 실전에서는 ajax를 통해 서버로 먼저 보내 영구 저장 후,
  // 버튼을 누르면 입력한 글 state를 추가하는 방식으로 개발이 된다
  let [input_value, change_input_value] = useState('');

  const add_content = () => {
    let add_emp = [...contents];
    let new_object = {
      'title' : input_value,
      'date'  : new Date(),
      'modal' : false,
      'like_num' : 0
    };
    // unshift -> 앞에 바꾸어준다.
    add_emp.unshift(new_object);
    change_contents(add_emp);
    document.getElementById('publish_input').value = '';
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
    {
      contents.map((content, index)=>{
        return (
          // 최상위에 key값이 없을 경우, key 값 에러('경고'이지만) 나타난다!
          // 반복문이 있을 경우, 항상 key 값을 넣어두자!
          <div key={content.title} className="list"> 
            <h3 onClick={ () => { open_modal_modal(index) } }>{ content.title }<span onClick={ () => { like_up_up(index) } }>👍</span> { content.like_num } </h3>
            <p>{ content.date }</p>
            <hr/>
            { content.modal? (<Modal title={content.title} ></Modal>) : null }
            
          </div>
          )
      })
    }

    <hr/>
    {/* <p>인풋인풋 : e.target.value 입력된 값을 들고온다.</p>
    <input onChange={ (e) => { change_input_value( e.target.value ) } } />
    <p>{ input_value }</p> */}

    <div className='publish'>
      <input id='publish_input' onChange={ (e)=>{ change_input_value( e.target.value ) } } />
      <button onClick={ () => { add_content() } }>저장</button>
    </div>

    <button onClick={ () => { change_push_num(0) }} >button1</button>
    <button onClick={ () => { change_push_num(1) }} >button2</button>
    <button onClick={ () => { change_push_num(2)} } >button3</button>

    {
      <Modal2 content_title1={content_title1} push_num={push_num}></Modal2>
    }
    <Profile></Profile>
    </div>

  );
}

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

// 지금은 신문법이지만 옛날 문법도 있다!
// 이전 component 만든는 기본 문법
class Profile extends React.Component {

  // class의 변수/초기값 저장할 때 쓰인다
  constructor(){
    super();
    this.state = { name: 'kim', age : 30, };
  }

  // useState 와 비슷하지만 -> setState를 사용하면 원하는 스테이트를 바꿀 수 있다.
  // 완전히 대체하는 것이 아닌 자기가 원하는 값만 바꾸어 준다.
  // 클래스를 만들어서 사용하는 경우 항상 this를 적어주어야 한다
  // bind 하는 경우, 타입 에러가 나타난다. -> 생각보다 this에 민감하다
  // 전역 function으로 할 경우, this는 자기 자신이다
  change_name() {
    this.setState({name: 'park', age: 22})
  }
  // arrow function 을 사용하게 되면, this 자체가 function을 가르키는 것이 아닌 클레스를 가르키게 된다
  change_name_arrow = ()=>{
    this.setState({name: 'lee', age: 52})
  }

  render (){
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다</p>
        <p>나이는 {this.state.age} 입니다</p>
        <button onClick={ this.change_name.bind(this) }>버튼</button>
        <button onClick={ this.change_name_arrow }>버튼</button>
      </div>     
    );
  }
}

export default App;
