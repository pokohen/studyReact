import React, { useReducer, useEffect } from "react";
import useInputs from "./useInput";

const InfoMember = ()=>{

    const [state, onChange] = useInputs({
        name : '',
        nicname : ''
    })

    const { name, nicname } = state

    useEffect( () => {
        console.log('useEffet는 render될 때마다, 사용됩니다!')
        console.log('지금은 name이 render 될 때만 사용됩니다!', name)
        return ()=>{
            console.log('useEffect를 unmount 합니다!')
        }
    }, [])

    return (
        <div>
            <input type="text" value={name} name="name" onChange={ onChange  } />
            <input type="text" value={nicname} name="nicname" onChange={ onChange } />
            <p>
                name : {name} <br/>
                nicname : {nicname}
            </p>
        </div>
    )
}

export default InfoMember