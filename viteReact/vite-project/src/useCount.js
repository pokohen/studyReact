import { useReducer } from "react";

function reducer(state, action){
    // state는 현 상태를 나타냄 -> object 형식으로 넘겨준다
    // action은 dispach를 통해서 이루어진다. return 값으로 현 상태를 바꿀 수 있음
    switch (action) {
        case 'INCREMENT' : return { count : state.count + 1 };
        case 'DECREMENT' : return { count : state.count - 1 };
        default : return state;
    }
}

export default function useCounter (initialCounter) {

    // initialCoubter를 파라미터로 받아서, reducer의 초기값을 선언하여 준다.
    const [state, dispatch] = useReducer(reducer, initialCounter)

    const onClick = e =>{ 
        // e.type을 준다고 이미 선언
        dispatch( e.type ) 
    }

    // onClick으로, dispatch 값을 반환한다. 
    return [state, onClick]

}