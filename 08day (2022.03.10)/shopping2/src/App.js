import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
// detail 만들기
// Route를 만들어 페이지를 나누어 보자

function App() {

  let [shoes, change_choes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
      { /* 
      Route를 이용해서 보여주는 페이지를 나누어 준다
      매칭 되는 부분을 다 보여준다!
      따로 보여주기 위해선 exact를 넣으면 된다! -> 정확한 경로가 일치할 때만 보여줌

      react router 특징
      페이지가 다른 페이지가 아니고 그냥 페이지만 바꾸어 주는 것
      */}
      <Route exact path="/">
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
      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>
      { /* 한줄로 표현하는 방법 */}
      {/* <Route path="/aass" component={Modal}></Route> */}
    </div>
  );
}

// 컴포넌트화 -> 어짜피 object니깐 object채로 넘기자
// 페이지 나누기 (라우팅) - react-router-dom 라이브러리를 사용
function Card(props){
  var index = props.shoe.id + 1;
  var img_src = 'https://codingapple1.github.io/shop/shoes' + index + '.jpg';
  return (
    <div className='col-md-4'>
    <img src={ img_src } width={ '100%' } alt='shoes' />
    <h4>{ props.shoe.title }</h4>
    <p>{ props.shoe.content } & { props.shoe.price }</p>
  </div>
  )
}

export default App;
