import React from "react";
import { Outlet } from "react-router-dom";

function ItemEvents () {
    return (
        <>
            <h3>오늘의 이벤트</h3>
            <Outlet></Outlet>
        </>
    )
}

export default ItemEvents;