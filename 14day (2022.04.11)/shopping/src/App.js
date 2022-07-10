import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';

function App() {

  let [shoes, change_shoes] = useState(Data);
  let [shoes_count, change_shoescount] = useState(0);
  let [inventory, change_inventory] = useState([10, 11, 12, 13, 14, 15]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
              <Detail shoes= { shoes } inventory= { inventory } change_inventory= {change_inventory} />
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
            <div className='row' id='shoe_box'>
              {
                shoes.map((shoe, index)=>{ 
                  return (
                    <Card key={shoe.title} shoe={shoe} />
                  )
                })
              }
            </div>
            <button className='btn btn-primary' onClick={()=>{
              if(!shoes_count){
              
                axios.post('서버URL', { id : 'condingapple', pw: 1234}).then().catch();
                axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                change_shoes([...shoes, ...result.data]);
                change_shoescount(shoes_count + 1);
              })
              .catch(()=>{
                console.log('실패했어요');
              });
              }
            
            }}>더보기</button>
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
    <div className='col-md-12 prod-item' onClick={ () => {
        go_history.push('/detail/' + props.shoe.id);
    }}>
      <img src={ img_src } width={ '100%' } alt='shoes' />
      <h4>{ props.shoe.title }</h4>
      <p>{ props.shoe.content } & { props.shoe.price }</p>
    </div>
  )
}

export default App;
