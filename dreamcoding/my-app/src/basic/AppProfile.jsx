import './App.css';
import Avartar from './components/\bAvartar';
import Profile from './components/Profile';

function AppProfile() {

  // 함수를 참조하는 것이지, event가 발생했을 때, 해당 함수가 생성 되면 안된다.
  const handleClick = () =>{};

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avartar image='https://images.unsplash.com/photo-1666526910907-7a9d64ab8f2b' isNew={true}></Avartar>
      <Profile image='https://images.unsplash.com/photo-1666526910907-7a9d64ab8f2b' name='James Kim' title='프론트앤드 개발자' isNew={true}></Profile>
      <Profile image='https://images.unsplash.com/photo-1666098870304-61091dd75634' name='Anna Young' title='백앤드 개발자' isNew={false}></Profile>
      <Profile image='https://images.unsplash.com/photo-1666624832993-c1ee90125ac2' name='Bob Park' title='서버 개발자' isNew={false}></Profile>
    </>
  );
}

export default AppProfile;
