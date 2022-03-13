import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// 대문자는 컴퍼넌트 파일이다
// 모듈화 시키기 

// 뒤로 가기 버튼 만들기
// 링크는 app 확인

// 데이터 바인딩 
function Detail(props){
    // react-router-dom v5 이상
    // react v16.3 이상에서만 사용이 가능하다
    // 쉽게 웹 history라고 생각하자
    let history = useHistory();

    // useParams()
    // object 자료형이 남는다
    // 라우터의 useParams 훅
    let { id } = useParams();


    // find() -> filter() 함수이다
    // return 값이 참인 경우에만 find() array함수에 값을 저장한다.
    let find_prod = props.shoes.find((item) => {
        return item.id == id
    });

    //console.log(find_prod); // {id: 0, title: 'White and Black', content: 'Born in France', price: 120000}content: "Born in France"id: 0price: 120000title: "White and Black"[[Prototype]]: Object


    let img_src = "https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg";

    return (
      <div className="container">
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
                    // push('') -> 경로 이동
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
                    // push('') -> 경로 이동
            } }>뒤로하기</button> 
            </div>
        </div>
      </div> 
    )
  }

  export default Detail;