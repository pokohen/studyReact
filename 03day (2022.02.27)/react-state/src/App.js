/* eslint-disable */
import React, {useState} from 'react';
// useState 쓸 때 잊지말고 추가해놓기
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  let content_list = [];
  let [content_title1, change_content_title1] = useState(['남자 코트 추천', '강남 우동 맛집']);


  // 함수 이름을 넣을 때, 기본 함수 넣는 것처럼 함수()게 넣게 되면 바로 실행이 될 수 있기 때문에
  // onClick = { 함수 } 이런식으로 적는 게 좋다
  function change_content(){
    // change_content_title1(['여자 코트 추천', '강남 우동 맛집'])
    // 일반적으로 newArray = array 이렇게 넣으면 reference data type으로 넣는다 - 얇은 복사
    // spread opperation! - 신문법으로 복사하기 - deep copy

    // Array/Object state 변경
    // 일단 변경함수 써야함
    // 변경함수 ( 대체할 데이터 )
    // state는 직접 건들지 않느 것이 좋다

    content_list = [...content_title1];
    content_list[0] = '여자 코트 추천';
    change_content_title1(content_list);
  
  }

  let [work1, change_work1] = useState('react 강의');
  let [work2, change_work2] = useState('잠이 오는 시간대');
  let [work3, change_work3] = useState('정처리 공부도 한다');

  let [content_title2, change_content_title2] = useState(['나혼자산다', '너혼자산다', '우리혼자산다']);

  // 좋아요 버튼 만들기
  // 리엑트 onClick = { 클릭할 때 실행되는 함수 }
  // onClick = { fucntion() }

  let [like_count, change_like_count] = useState(0);

  // state 는 그냥 변경 되지 않음
  // 변경 함수를 사용하자!
  // change_like_count는 함수이다!
  // change_like_count( 내가 원하는 함수 )

  // eslint 가 코딩 관습을 알려줌
  // /* eslint-disable */ 를 제일 위에 올려놓게 되면 eslint 관련 콘솔이 닫히게 된다

  // 숙제
  // 남자코트추천 -> 여자코트추천

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ change_content }>버튼</button> { content_title1[0] }
      <div className="list"> 
        <h3> { posts } <span onClick={ () => { change_like_count(like_count + 1) } }>👍</span> { like_count } </h3>
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
        <hr/>
        <h3> { change_work3 = 'a' } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { content_title2[0] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { content_title2[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { content_title2[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    
    </div>
  );
}

export default App;
