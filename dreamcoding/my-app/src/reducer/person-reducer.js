export default function personReducer(person, action) {
    // Immer lib 사용하기
    switch(action.type) {
        case 'updated' : {
            const { prev, current } = action;
            return {
                ...person, 
                mentors : 
                    person.mentors.map((mentor) => {
                        if(mentor.name === prev) return {...mentor, name : current};
                        return mentor;
                    }
                ),
            }
        }
        case 'added' : {
            const { name, title } = action;
            return {
                ...person, 
                mentors : [...person.mentors, {name, title}]
            }
        }
        case 'deleted' : {
            const { prev } = action;
            return {
                ...person, 
                mentors : 
                    person.mentors.filter((mentor) => mentor.name !== prev)
            }
        }
        default : {
            throw Error(`알 수 없는 액선 타입이다 : ${action.type}`);
        }
    }
}