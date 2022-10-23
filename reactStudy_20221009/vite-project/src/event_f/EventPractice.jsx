import React, { useState } from "react";

export default function EventPractice () {

    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [form, setFrom] = useState({
        username: '',
        message: '',
    });

    const { username, useState } = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
        };
        setFrom(nextForm);
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    )
    
}
