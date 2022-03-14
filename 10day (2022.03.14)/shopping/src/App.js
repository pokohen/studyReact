import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [shoes, change_choes] = useState(Data);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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
        
        <Route path="/detail/:id">
              <Detail shoes= { shoes }/>
        </Route>

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
