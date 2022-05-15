import React, { Component } from "react";
import error01Path from './errorImg/prop_type_error.png';
import error02Path from './errorImg/isRequired_error.png';
import PropTypes from 'prop-types';
// component 생성시 앞문자가 대문자가 아니면 자동적으로 react에서 걸러낸다.
// img는 import 해서 사용하기

class MyComponent extends Component {

    // class 내부에서 저장 => 기본 props와 propType 저장
    static defultProps = {
        name : '기본 이름'
    }

    static propTypes = {
        name: PropTypes.string,
        favorateNumber : PropTypes.number.isRequired
    }

    render() {
        const { name, favorateNumber, children } = this.props; //비구조화 할당
        
        return (
            <div>
               <p>
                   만약에 propTypes를 제대로 하지 않는다면, <br />
                   <img src={error01Path} alt="prop type error" width={'100%'} />
                   만약에 propTypes를 제대로 하지 않는다면, <br />
                   <img src={error02Path} alt="prop type error" width={'100%'} />
               </p>
               <h1>myComponent is {name}</h1>
               <h2>and my children is {children}</h2>
               <h3>my favorateNumber is {favorateNumber}</h3>
           </div>
        );
    }
}


// const MyComponent = ({name, children, favorateNumber}) => {
//     return (
//         <div>
//             <p>
//                 만약에 propTypes를 제대로 하지 않는다면, <br />
//                 <img src={error01Path} alt="prop type error" width={'100%'} />
//                 만약에 propTypes를 제대로 하지 않는다면, <br />
//                 <img src={error02Path} alt="prop type error" width={'100%'} />
//             </p>
//             <h1>myComponent is {name}</h1>
//             <h2>and my children is {children}</h2>
//             <h3>my favorateNumber is {favorateNumber}</h3>
//         </div>
//     )

// }

// MyComponent.defaultProps = {
//     name : 'canzoo12',
// }

// // prop-types의 class 속성은 propTypes 소문자로 적어야 한다!
// MyComponent.propTypes = {
//     name : PropTypes.string,
//     favorateNumber : PropTypes.number.isRequired,
// }

export default MyComponent;