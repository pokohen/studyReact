import React, { useState } from 'react';


const IterationSample = () => {
    const [names, setNames] = useState([
      { id : 1, text : '눈사람'},
      { id : 2, text : '얼음'},
      { id : 3, text : '비'},
      { id : 4, text : '바람'},
    ])

    const [inputText, setInputText] = useState('');
    const [nextId, setNextID] = useState(names.length + 1);

    const mystyle = {
        marginTop : '120px',
    };

    const onChange = e => {
        setInputText(e.target.value);
    }

    const onClick = ()=>{
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextID(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onDelete = id => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames);
    }

    const onKeyDown = e => {
        const { keyCode } = e;
        if(keyCode === 13) onClick();
    }

    const namelsit = names.map(name => <li key={name.id} onDoubleClick={()=>{onDelete(name.id)}}>{name.id + ' : ' + name.text}</li>)
    return (
        <>
            <input value={inputText} onChange={onChange} onKeyDown={onKeyDown} style={mystyle}/>
            <button onClick={onClick}>추가</button>
            <ul>{namelsit}</ul>
        </>
    )

}

export default IterationSample;