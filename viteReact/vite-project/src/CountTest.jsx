import React from "react";
import useCounter from "./useCount";

const CountTest = ()=>{

    const [state, onClick] = useCounter({ count : 0})
    const { count } = state;

    return (
        <p>
            count is: {count} 
        <br/>
        <button type="button" onClick={ ()=>{onClick( { type : 'INCREMENT' } )} }> 
            up count  
        </button>
        <button type="button" onClick={ ()=>{onClick( { type : 'DECREMENT' } )}}>
            down count   
        </button>
      </p>
    )
}

export default CountTest;