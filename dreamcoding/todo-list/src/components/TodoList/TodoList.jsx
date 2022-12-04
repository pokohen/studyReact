import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    
    const [todos, setTodos] = useState(readTodosFromLocalStorage);
    
    const handleAdd = (todo) => {
        // 새로운 투두를 todos에 추가 되어야 한다
        setTodos([...todos, todo]);
    }

    const handleUpdate = (updated) => {
        setTodos(todos.map(t => t.id === updated.id? updated : t));
    }
    const handleDelte = (deleted) => {
        setTodos(todos.filter(t => t.id !== deleted.id));
    }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const filtered = getFilterItems(todos, filter);


    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo
                     key={item.id} 
                     todo={item} 
                     onUpdate={handleUpdate} 
                     onDelete={handleDelte}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function readTodosFromLocalStorage() {
    // console.log('readTodosFromLocalStorage');
    // useState에서 function 이나 Network 상에서 return 한다면, 계속 초기화 할 것이다!
    // 따라서 콜백 함수나, 변수로 변환해주면 된다
    const todos = localStorage.getItem('todos');
    return todos? JSON.parse(todos) : [];
}

function getFilterItems (todos, filter) {
    if(filter === 'all') return todos;
    return todos.filter(todo => todo.status === filter);
}