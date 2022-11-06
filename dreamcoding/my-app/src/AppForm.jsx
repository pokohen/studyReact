import React from 'react';
import { useState } from 'react';

export default function AppForm() {
    
    const [form, setForm] = useState({
        name : '',
        email : '',
    });

    const handleSubmit = (e) => {
        // form애서 refrush을 원하지 않는다면, preventDefault를 반드시 적어야한다.
        e.preventDefault();
        console.log(form);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name] : value});
    }
    
    return (
        // uncontrol component
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름 : </label>
            <input 
                type='text' 
                id='name' 
                name='name' 
                value={form.name}
                onChange={handleChange} />
            <label htmlFor='email'>이메일 : </label>
            <input 
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange} />
            <button>Submit</button>
        </form>
    );
}