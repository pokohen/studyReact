import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';

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
      {/* 
        app 에서 return 할 때, map 잊지말기, map에서도 return 
        추가적으로 Map은 각 Array의 아이템 별로 function을 실행하고 그 결과를 '반환'하지만
        forEach는 아이템별로 기능만 실행하고 결과값이 반환하지 않는다. -> 결과값 반환 X
        즉, forEach는 render() 함수 안에서 component를 출력할 수 없다
      */}
      <div className='container'>
        <div className='row'>
          {
            shoes.map((shoe, index)=>{
              return (
                <Items index={index} title={ shoe.title } content={shoe.content} price={shoe.price}></Items>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

// 컴포넌트화
function Items(props){
  var index = props.index + 1;
  var img_src = 'https://codingapple1.github.io/shop/shoes' + index + '.jpg';
  return (
    <div className='col-md-4'>
    <img src={ img_src } width={ '100%' } alt='shoes' />
    <h4>{ props.title }</h4>
    <p>{ props.content } & { props.price }</p>
  </div>
  )
}

export default App;
