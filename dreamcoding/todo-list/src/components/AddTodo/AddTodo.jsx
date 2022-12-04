import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({onAdd}) {

    const [text, setText] = useState('');

    const handleChange = (e)=> setText(e.target.value);
    const handleSumit = (e) => {
        e.preventDefault();
        // trim은 원본을 변하게 한다
        if(text.trim().length === 0) return false;
        onAdd( {id: uuidv4(), text: text, status: 'active'});
        setText('');
    }

    return (
        <form className={styles.form}>
            <input type='text' className={styles.input} placeholder='Add Todo' value={text} onChange={handleChange}/>
            <button className={styles.button} onClick={handleSumit}>Add</button>
        </form>
    );
}

