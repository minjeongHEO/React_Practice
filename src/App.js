import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let [postNm, setPostNm] = useState([]);

let List=() => {
  setPostNm(['์ง์์ด๋ค','๐ฉ๐โ๐ฆบ','์๊ฐํฉ๋๋ค']);
  console.log(postNm)
  // {postNm.map(i,v)}{
    //   <div className='list'>
    //     <h4>{postNm[i]}</h4>
    //     <p>2์ 5์ผ ๋ฐํ</p>
    //   </div>
    // }
  }
  
  function App() {
  let post = '์ง์์ด๋ ๐ฉ๐โ๐ฆบ';
  let [name, setName] = useState('๋จ์์ฝํธ ์ถ์ฒ');
  // let [postNm, setPostNm] = useState([]);

  function FnClick(){
    let nameCopy = [...name]; //typeOf : Object
    nameCopy.sort();
    if(name.includes('์ฌ์')){
      console.log('์ฌ์hey');
      nameCopy = '๋จ์์ฝํธ ์ถ์ฒ';
    }else{
      console.log('๋จ์hey');
      nameCopy = '์ฌ์์ฝํธ ์ถ์ฒ';
    }
    setName(nameCopy);
  }
  return (
    <div className="App">
      <div className="black-nav">๋ธ๋ก๊ทธ์</div>
      {/* <h4>๋ธ๋ก๊ทธ ๊ธ ์ ๋ชฉ</h4> */}
      {/* <h4 style={ {color:'red', fontSize:'30px'}}>{post}</h4> */}
      <h4 style={ {color:'red', fontSize:'30px'}}>{name}</h4>
      <div>
        <button onClick={FnClick}>๋๋ฌ๋ณด์ธ์</button>
      </div>
      
      <div>
        {List}
      </div>
      
    </div>
  );
}

export default App;
