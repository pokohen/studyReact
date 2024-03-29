import React from 'react';
import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {

    // const [person, setPerson] = useState(initialPerson);
    // 먼저, funciton이 들어있는 부분을 넘기고, 뒤에 기본 값을 넣어놓기
    // useReducer는 공식 문서 더 알아보기 
    const [person, dispath] = useReducer(personReducer, initialPerson);
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispath({type: 'updated', prev, current});
    };
    
    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispath({type: 'added', name, title});
    };

    const handleDelete = () => {
        const prev = prompt(`누구를 삭제하고 싶은가요?`);
        dispath({type: 'deleted', prev});
    };

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
            <button onClick={handleUpdate}>
                멘토의 이름을 바꾸기
            </button>
            <button onClick={handleAdd}>
                멘토 추가하기
            </button>
            <button onClick={handleDelete}>
                멘토의 지우기
            </button>
        </div>
    );
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


/**
 * 
 * 상태관리
 * 리엑트의 상태관리는 불변성이므로, 상태는 readonly로 유지하고, 새로운 읽는 것을 만들어 내야한다.
 * 
 * 그러므로 Hook을 잘 사용하는 것이 중요! -> useReducer, ContextAPI (Global 상태 관리 가능)
 * 
 */