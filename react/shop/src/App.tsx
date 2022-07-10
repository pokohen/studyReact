import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg_src from './img/bg.png';
import Items from './Compoent/Items';
import {a, b, data} from './data';


function App() {
  const [count, setCount] = useState(0);
  let [shoes] = useState(data);

  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MY SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     

      <div className="main-bg" style={ {backgroundImage : `url(${bg_src})` }}></div>

      <Items shoes={shoes}></Items>
    
    </div>
  )
}

export default App