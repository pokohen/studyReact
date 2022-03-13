import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail.js'
// detail 만들기
// Route를 만들어 페이지를 나누어 보자

function App() {

  let [shoes, change_choes] = useState(Data);
  // App 이라는 안에 detail이 존재 props를 통해서 데이터를 바인딩 하자
  // 근데 굳이?
  // 중요한 데이터 같은 경우 여러 곳에서도 쓰일 수 있기 때문에 App 에서 데이터 바운딩을 하는 것이 좋다
  // 데이터는 대부분 상위 컴포넌트 -> 하위 컴포넌트
  // 나중애 redux파일에 보관


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            { /* Link로 감싸고 TO를 적어서 href처럼 사용할 수 있다 */ }
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        
        { /* 
          :id를 입력하면 파라미터 자리가 된다
          : 뒤에 마음대로 작성이 가능하다
          추가로 저고 싶다면 :id/:id2
        */}
        <Route path="/detail/:id">
              <Detail shoes= { shoes }/>
        </Route>

        {/* 
          url 파라미터 /모든문자 라는 경로를 의미
          Switch를 사용하면 중복을 허용하지 않는다
        */}

        <Route path="/">
          <div className='background jumbotron'>
            <h1>20% Season Sale</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <div className='container'>
            <div className='row'>
              {
                shoes.map((shoe, index)=>{
                  return (
                    <Card key={shoe.title} shoe={shoe} />
                  )
                })
              }
            </div>
          </div>
        </Route>
        
        <Route path="/:id" >
              <div>아무거나 적었을 때 이거 보여주셈</div>
        </Route>
      </Switch>
      
    </div>
  );
}

function Card(props){
  var index = props.shoe.id + 1;
  var img_src = 'https://codingapple1.github.io/shop/shoes' + index + '.jpg';
  let go_history = useHistory();

  // react에서는 inline-style을 피하라고 말한다
  return (
    <div className='col-md-4 prod-item' onClick={ () => {
        go_history.push('/detail/' + props.shoe.id);
    }}>
      <img src={ img_src } width={ '100%' } alt='shoes' />
      <h4>{ props.shoe.title }</h4>
      <p>{ props.shoe.content } & { props.shoe.price }</p>
    </div>
  )
}

export default App;
