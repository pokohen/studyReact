import React from 'react';
import './App.css';
import { useState } from 'react';
import Counter from './basic/components/Counter';

export default function AppCounter() {
    
    const [count, setCount] = useState(0);
    const [isOver, setIsOver] = useState(false);

    const handleClick = ()=> {
        setCount( prev => {
            if(prev+1 > 10) setIsOver(true);
            return prev+1;
        });
    };

    return (
        <>
            <p className='total-box'>{count} {!isOver? '👾' : '😡'}</p>
            <Counter total={count} onClick={handleClick}/>  
            <Counter total={count} onClick={handleClick}/>  
        </>
    );
}

