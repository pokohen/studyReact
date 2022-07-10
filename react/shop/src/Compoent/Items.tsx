import React, {useState} from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

type Shop_data = { id : number, title : string, content : string, price : number}

function Items (props: any) {

    

    {
    /* public folder 사용시에 경로에 대해 주심! 
          배포시 process.env.PUBLIC_URL + ~~~ 하기
      */
     }

    return (
        <div className="container">
            <div className="row">
                {
                    props.shoes.map((item : Shop_data)=>{
                        return (
                        <div className="col-md-4">
                            <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" />
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                            <p>{item.price}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Items;
