import React from "react";
import PropTypes from 'prop-types';
// component 생성시 앞문자가 대문자가 아니면 자동적으로 react에서 걸러낸다.

const MyComponent = ({name, children}) => {
    return (
        <div>
            <p>
                만약에 propTypes를 제대로 하지 않는다면,<br />
                <img src="./errorImg/prop_type_error.png" alt="prop type error" width={'100%'} />
            </p>
            <h1>myComponent is {name}</h1>
            <h2>and my children is {children}</h2>
        </div>
    )

}

MyComponent.defaultProps = {
    name : 'canzoo12',
}

// prop-types의 class 속성은 propTypes 소문자로 적어야 한다!
MyComponent.propTypes = {
    name : PropTypes.string,
}

export default MyComponent;