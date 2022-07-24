import React from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

function ItemDetail(props : any) {

    let { id } = useParams();
    let idx : number = Number(id);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${idx+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[idx].title}</h4>
                    <p>{props.shoes[idx].content}</p>
                    <p>{props.shoes[idx].price} 원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    );
} 

export default ItemDetail;