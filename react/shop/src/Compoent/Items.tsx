import React, {useState} from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import styled, { StyledComponent } from 'styled-components';

// styled-component 
// yarn add styled-components
// npm i --save-dev @types/styled-components
// 2개를 다 해줘야 타입이 지정되며, 사용가능하다.
// App.module.css 처럼 작성하면 styled-component 처럼 된다
// 참고 문헌
// https://velog.io/@eunjin/React-PropTypes-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0-%EB%B0%A9%EB%B2%95
// https://velog.io/@hwang-eunji/styled-component-typescript

type Shop_data = { id : number, title : string, content : string, price : number}



// let YeollowBtn : StyledComponent<'button', any, {}, never> = styled.button`
    // background : ${ (props : any) : string => props.bg };
    // color : ${ (props : any) : string => props.bg == 'blue' ? 'white' : 'black' };
    // padding : 10px;
// `

// let NewBtn = styled.button(YeollowBtn)`
    // 
// `

// let Box = styled.div`
//     background : grey;
//     padding : 20px;
// `

function Items (props: any) {

    {
    /* public folder 사용시에 경로에 대해 주심! 
          배포시 process.env.PUBLIC_URL + ~~~ 하기
      */
     }

    return (
        <div className="container">
            {/* <YeollowBtn bg="blue">버튼</YeollowBtn> */}
            {/* <YeollowBtn bg="orange">버튼</YeollowBtn> */}
            {/* <NewBtn>복사버튼</NewBtn> */}
            <div className="row">
                {
                    props.shoes.map((item : Shop_data)=>{
                        return (
                        <div className="col-md-4">
                            <Link to={`/detail/${item.id}`}>
                                <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" />
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                                <p>{item.price}</p>
                            </Link>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Items;
