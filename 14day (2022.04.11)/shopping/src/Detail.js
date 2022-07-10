import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import axios from 'axios';
// scss를 사용하면 자동적으로 node-sass 가 컴파일러 해주어서 간편하게 사용 가능하다


// 컴포넌트의 Lifecycle
// Hook -> 라이프 사이클에 명령 하는 것

// class로 만드는 법
class Detail2 extends React.Component {
  
  // Detail2 컴포넌트가 Mount 되었을 때 실행할 코드
  componentDidMount(){

  }

  // Detail2 컴포넌트가 unmount 끝나기 전에 코드
  componentWillUnmount(){

  }

}

let Box = styled.div`
  padding : 20px;
`;
let Title = styled.h4`
  font-size : 25px;
  color : ${ porps => porps.color }
`;

function Detail(props){

  let [alert, change_alert] = useState(true);
  let [inputData, change_inputData] = useState('');

  // 최근 방법
  useEffect(() => {
   // Detail 컴포넌트 로드시 ajax로 데이터를 가져오고 싶음
    
    // axios.get()

    // 컴포넌트가 mount 되었을 때 실행
    console.log(1111);
    // 2초뒤에 alert 사라지게
    // 항상 HTML에 보여지게 하는 것 보다 이렇게 하는 것이 훨씬
    let timer = setTimeout(()=>{
      change_alert(!alert);
    }, 2000);

    // 컴포넌트가 사라질 때 코드를 실행시킬 수 있음
    // unmount할 때, 사용할 수 있다
    // return () => {
      
    // }
    return ()=>{
      clearTimeout(timer);
    }

  }, [
    // 실행조건 -> 빈칸이라면 아예 사용하지 않는다, 빈칸인 아이는 없으니깐
    // 즉 첫번째만 로딩된다
    // 여러개를 하고 싶으면 콤마를 적어서 할 수 있다
    // 'state 이름'이 업데이트 될 때, 실행해주세요
    // alert, inputData, ...'state 이름'
  ]);

  // 여러개 사용하고 싶다면
  useEffect(()=>{
    console.log(22222);
  });

    let history = useHistory();
    let { id } = useParams();
    let find_prod = props.shoes.find((item) => {
        return item.id == id
    });

    let img_src = "https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg";

    return (
      <div className="container">
          <Box>
            <Title className='red'>Detail</Title>
          </Box>
          {/* input이 변할 때마다, 재랜더링이 된다 */}
          { inputData }
          <input onChange={ (e) => { change_inputData(e.target.value) }} />

          {
            alert === true?
            (<div className='my-alert my-alert-yellow _my_alert'>
              <p>재고가 얼마 남지 않았습니다</p>
            </div>) 
            : null
          }
          
          {/* <div className="row flex-row">
              <div className="col-md-6">
              <img src={ img_src } width="100%" />
              </div>
              <div className="col-md-6 mt-4">
              <h4 className="pt-5">{ props.shoes[id].title }</h4>
              <p>{ props.shoes[id].content }</p>
              <p>{ props.shoes[id].price }원</p>
              <button className="btn btn-danger">주문하기</button> &nbsp;
              <button className="btn btn-danger" onClick={ () => { 
                      history.goBack();                
              } }>뒤로하기</button> 
              </div>
          </div> */}
          <div className="row flex-row">
              <div className="col-md-6">
              <img src={ img_src } width="100%" />
              </div>
              <div className="col-md-6 mt-4">
              <h4 className="pt-5">{ find_prod.title }</h4>
              <p>{ find_prod.content }</p>
              <p>{ find_prod.price }원</p>
              {/* 재고를 컴포넌트로 만들기 */}
              {/* 하위 컴포넌트가 몇개등, 데이터를 전송하려면 prop를 쓰게 된다. prop의 지옥..
                  하위 컴포넌트가 상위 컴포넌트 state 병경하려며느 state 병경 함수 씁니다
                  그럼 function은? class를 만들어서 bind하기
                  더 쉽게 사용 하려면 content api 혹은 redux를 사용하자!
              */}
              <Inventory inventory= { props.inventory[find_prod.id] } />
              <button className="btn btn-danger" onClick={()=>{
                let emp = [...props.inventory];
                emp[find_prod.id] = emp[find_prod.id] == 0? emp[find_prod.id] : emp[find_prod.id] - 1;
                props.change_inventory(emp);
              }}>주문하기</button> &nbsp;
              <button className="btn btn-danger" onClick={ () => { 
                      history.goBack();                
              } }>뒤로하기</button> 
              </div>
          </div>
      </div> 
    )
  }

  function Inventory(props){
    return (
      <p>재고 : {props.inventory} </p>
    )
  }

  export default Detail;