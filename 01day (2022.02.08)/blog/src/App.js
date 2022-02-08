import logo from './logo.svg';
import './App.css';

// 메인 페이지 -> App.js
// 노드 js 설치한 이유 -> create-react-app 를 사용하기 위해 설치함
// node_modules : 라이브러리 모은 폴더
// public : static파일 보관함
// src : 소스코드 보관함
// package-.json : 설치한 라이브러리 목록
// npx create-react-app 프로젝트명 -> 파일 설치 

// 메인페이지 작동 원리 
// id가 root인 부분에 render 시켜준다
// return에 html에 작성

// JSX
// HTML처럼 생겼지만 HTML과 다르다
// class -> className
// react의 가장 큰 장점
// 데이터 바인딩이 쉽다! -> {변수명, 함수 등}
// 이미지는 import 해서 넣을 수있다 -> 일반 적으로도 사용이 가능하다
// 만약 style을 넣고 싶다면? 오브젝트 형태로 넣으면 된다
// 키 값은 camelCase 작명으로 벨류는 항상 string으로

function App() {

  let posts = '강남 고기 맛집';
  let myStype = { width: '200px', backgroundColor : 'green' };

  function 함수(){
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div className={ posts }>개발 Blog</div>
      </div>
      <img src={ logo } style={ { width: '100px', backgroundColor : 'blue' } }/>
      <img src={ logo } style={ myStype }/>
      <h4>{ posts } {함수()}</h4>
    </div>
  );
}

export default App;
