import React, { useState } from 'react';

export default function Counter({total, onClick}) {
    const [count, setCount] = useState(0);

    // 여러번 change state를 사용하여도, snapshot을 찍으면서, state는 유지가 된다.
    // 그러므로 callback Func를 사용해서, 이전 상태 값을 전달하는 것이 가장 중요하다.
    // closer를 생각하면 쉽다!

    return (
        <div className='counter'>
            <p className='number'>{count} / <span>{total}</span></p>
            <button className='button' onClick={()=>{
                setCount((prev)=> prev + 1)
                onClick();
            }}>Add +</button>
        </div>
    );
}

