import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg_src from './img/bg.png';
import Items from './Compoent/Items';
import {a, b, data} from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import ItemDetail from './Compoent/ItemDetail';
import Abouts from './Compoent/Abouts';
import ItemEvents from './Compoent/ItemEvents';

function App() {
  const [count, setCount] = useState(0);
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={ ()=>{ navigate('/') } }>MY SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/about') } } >About</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/event') } } >Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     

      <Routes>
          <Route path='/' element={
            <div>
              <div className="main-bg" style={ {backgroundImage : `url(${bg_src})` }}></div>
              <Items shoes={shoes}></Items>
            </div>
          } />
          <Route path='/detail/:id' element={
            <ItemDetail shoes={shoes} ></ItemDetail>
          } />
          {/* { 
            nestred routes : dept를 만듬
            내부에 Outlet을 사용하면, props처럼 값을 넣어줄 수 있음 - Detail참고
          } */}
          <Route path='/about' element={
            <Abouts></Abouts>
          } >
            <Route path='member' element={
              <div>맴버</div>
            }></Route>
          </Route>
          
          <Route path='/event' element={
            <ItemEvents></ItemEvents>
          }>
            <Route path='one' element={ <h4>첫 주문시 양배추즙 서비스</h4> }></Route>
            <Route path='two' element={ <h4>생일 기념 쿠폰 받기</h4> }></Route>
          </Route>
          <Route path='*' element={
            <div>없는 페이지예요</div>
          } />
      </Routes>

      
    
    </div>
  )
}

export default App