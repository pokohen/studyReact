import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

// class 선언 없이 컴포넌트에 css를 직접 장착 css in js
// npm install styled-components
// component를 하나 만든다고 생각
// 백팁(``)로 글자를 적는다
// 자동적으로 class 명을 넣어진다
// styled-component 는 필수가 아닌 선택사항이다!
// 색깔만 다른 제목을 여러개 만들려면?


let Box = styled.div`
  padding : 20px;
`;

// ${} -> 안에 변수를 넣을 수 있다
// 백팁 안에서만 쓸 수 있다
// 일반 component 처럼 props를 넘길 수 있다
let Title = styled.h4`
  font-size : 25px;
  color : ${ porps => porps.color }
`;

function Detail(props){
    let history = useHistory();
    let { id } = useParams();
    let find_prod = props.shoes.find((item) => {
        return item.id == id
    });

    let img_src = "https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg";

    return (
      <div className="container">
          <Box>
            <Title color='#dddddd'>상세페이지</Title>
          </Box>
          <div className="row">
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
          </div>
          <div className="row">
              <div className="col-md-6">
              <img src={ img_src } width="100%" />
              </div>
              <div className="col-md-6 mt-4">
              <h4 className="pt-5">{ find_prod.title }</h4>
              <p>{ find_prod.content }</p>
              <p>{ find_prod.price }원</p>
              <button className="btn btn-danger">주문하기</button> &nbsp;
              <button className="btn btn-danger" onClick={ () => { 
                      history.goBack();                
              } }>뒤로하기</button> 
              </div>
          </div>
      </div> 
    )
  }

  export default Detail;