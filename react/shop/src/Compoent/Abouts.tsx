import React from "react";
import { Outlet } from "react-router-dom";

function Abouts(){
    return (
        <>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </>
    )
}

export default Abouts;