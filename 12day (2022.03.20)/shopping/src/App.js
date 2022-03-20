import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';

/*

Ajax : 서버에 새로고침 없이 요청을 할 수 있게 도와줌
GET 요청 : 특정 페이지 / 자료읽기
POST 요청 : 서보로 중요 정보 전달 - 버튼 등을 통해 전달

1. jQuery 설치해서 $.ajax()
2. axios 설치해서 axios.get()  -  react 혹은 vue
3. javascript 설치해서 fetch()

axios는 뒤에 get('GET 요청할 주소') 로 들고 올 수 있다.
이후 성공 하면 .then(()=>{})
실패할 시 catch(()=>{})


*/

function App() {

  let [shoes, change_shoes] = useState(Data);
  let [shoes_count, change_shoescount] = useState(0);
  let [inventory, change_inventory] = useState([10, 11, 12, 13, 14, 15]);

  // useEffect(()=>{
  //   axios.get('https://codingapple1.github.io/shop/data2.json')
  //   .then((result)=>{
  //     let emp_shoe = [];
  //     shoes.map((shoe) => {
  //       emp_shoe.push(<Card key={shoe.title} shoe={shoe} />);
  //     });
  //     change_onAddShoe(emp_shoe);
  //   }).catch(()=>{
  //     console.log('실패');
  //   }) 
  // }, []);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* as={Link}는 Link 처럼 사용해주세요 */}
            {/* as라는 것은 react-bootstrap 문법인데 그냥 기본 a태그 대신 사용할 HTML태그 혹은 컴포넌트를 집어넣을 수 있습니다. */}
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
              {
                // 로딩 스위치 참 거짓? 나와줘 : 사라져줘
              }
            </div>
            <button className='btn btn-primary' onClick={()=>{
              if(!shoes_count){
              
                // 로딩중이라는 UI 띄움 - useState swich를 하나 만들어서 사용하면 된다

                // 서버에 데이트를 보내고 싶을 때 POST 요청하는 법
                // 요청시의 header 설정도 가능
                axios.post('서버URL', { id : 'condingapple', pw: 1234}).then().catch();

                axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                // result를 사용하게 되면 기본적으로 성공 이유 및 여러 것들을 들고 온다
                // 우리가 요청한 자료는 따옴표가 있는 JSON
                // axios가 자동적으로 json에서 object로 변환 시켜줌
                // 자바스크립트의 fatch는 json을 바꾸어주지 않을 수도 있음 
                // 직접적으로 html을 바꾸는 것이 아니라 shoe 자체의 데이터를 조작하면 된다.

                // 로딩중이라는 UI 삭제 -> 요청이 성공하면 사라지게 처리하기
                
                // 내가 생각한 방법
                // var add_shoes = result.data;
                // var emp_shoes = [...shoes];
                // add_shoes.map((value)=>{
                //   emp_shoes.push(value);
                // })
                // change_shoes(emp_shoes);

                // 간단하게 만들기
                change_shoes([...shoes, ...result.data]);
                // 여러개를 만들면 count를 만들어서 새롭게 나오도록 하면 된다
                change_shoescount(shoes_count + 1);
              })
              .catch(()=>{
                // 로딩중이라는 UI 삭제 -> 요청이 성공하면 사라지게 처리하기
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
