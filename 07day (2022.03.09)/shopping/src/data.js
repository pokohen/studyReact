// 파일을 쪼갤 때 활용하는 import/export
// 외부로 파일 보내기 : export default 변수명
// 외부에서 파일 받기 import 변수명 from 경로
// export default 는 하나만 사용가능하고, 맨 마지막에 쓴다

// var name = 'kim';
// var name2 = 'park';

// 여러개를 export하기 위해선 중괄호로 쓴다
// 여러개를 import하기 위해서도 중괄호! -> 부트스트랩 들고오는 부분을 보면 이해가 빠르다
// export { name, name2 };

// import Data from './data.js'; -> alias 를 활용해서 export시켜준다

export default [
    {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000
    },

    {
        id : 1,
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000
    },

    {
        id : 2,
        title : "Grey Yordan",
        content : "Born in the States",
        price : 130000
    }
] 