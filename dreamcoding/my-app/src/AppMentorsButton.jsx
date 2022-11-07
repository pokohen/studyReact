import React, { useReducer, useCallback, useMemo, memo } from 'react'; 
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {

    const [person, dispath] = useReducer(personReducer, initialPerson);

    // useCallback도 useMemo와 비슷하며, 콜백 처리를 디펜던시가 변하지 않으면 변하지 않음
    // 리랜더링 할 때, 새로운 props가 만들어지더라도, 안에 내용이 그대로라면, 변하지 말어라고 말한다
    const handleUpdate = useCallback(() => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispath({type: 'updated', prev, current});
    }, []);
    
    const handleAdd = useCallback(() => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispath({type: 'added', name, title});
    }, []);

    const handleDelete = useCallback(() => {
        const prev = prompt(`누구를 삭제하고 싶은가요?`);
        dispath({type: 'deleted', prev});
    }, []);

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
            <Button text='삭제하기' onClick={handleDelete} />
            <Button text='멘토 추가하기' onClick={handleAdd} />
        </div>
    );
}

// 메모를 해놓으면, props 까지 제어가 가능하다 - props가 바뀌지 않는다면, re-rendering 방지
const Button = memo(( {text, onClick} ) => {
    console.log('Button', text, 're-rendering 😛');
    const result = useMemo(()=> calculateSomething(), []);
    return (
        <button
            onClick={onClick}
            style={{
                background : 'black',
                color : 'white',
                borderRadius : '20px',
                margin : '0.4rem',
            }}
        >
            {`${text} ${result}`}
        </button>
    )
})

// function Button( {text, onClick} ) {
//     console.log('Button', text, 're-rendering 😛');
//     // 한번 호출하고, 디펜더시가 일어날 때만 바꾸는 작업, useEffec와 차이는 sueMemo는 랜더링 중에 생성, useEffect는 렌더링 완료된 후 호출
//     const result = useMemo(()=> calculateSomething(), []);
//     return (
//         <button
//             onClick={onClick}
//             style={{
//                 background : 'black',
//                 color : 'white',
//                 borderRadius : '20px',
//                 margin : '0.4rem',
//             }}
//         >
//             {`${text} ${result}`}
//         </button>
//     )
// }

function calculateSomething() {
    for (let i = 0; i < 1000; i++) {
        console.log('🤣');
    }
    return 10;
}

const initialPerson = {
    name : '엘리',
    title : '개발자',
    mentors : [
        {
            name : '밥',
            title : '시니어개발자',
        },
        {
            name : '제임스',
            title : '시니어개발자',
        },
    ],
}