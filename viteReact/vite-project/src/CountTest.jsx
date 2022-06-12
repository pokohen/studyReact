import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' : return { value : state.value + 1};
        case 'DECREMENT' : return { value : state.value - 1};
        default : return state;
    }
}

const CountTest = ()=>{

    const [state, dispatch] = useReducer(reducer, { value : 0 })


    return (
        <p>
            count is: {count}
        <br/>
        <button type="button" onClick={ dispatch( { type : 'INCREMENT' } ) }>
            up count  
        </button>
        <button type="button" onClick={ dispatch( { type : 'DECREMENT' } )}>
            down count  
        </button>
      </p>
    )
}

export default CountTest;