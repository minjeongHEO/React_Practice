import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let [postNm, setPostNm] = useState([]);

let List=() => {
  setPostNm(['지안이네','💩🐕‍🦺','소개합니다']);
  console.log(postNm)
  // {postNm.map(i,v)}{
    //   <div className='list'>
    //     <h4>{postNm[i]}</h4>
    //     <p>2월 5일 발행</p>
    //   </div>
    // }
  }
  
  function App() {
  let post = '지안이는 💩🐕‍🦺';
  let [name, setName] = useState('남자코트 추천');
  // let [postNm, setPostNm] = useState([]);

  function FnClick(){
    let nameCopy = [...name]; //typeOf : Object
    nameCopy.sort();
    if(name.includes('여자')){
      console.log('여자hey');
      nameCopy = '남자코트 추천';
    }else{
      console.log('남자hey');
      nameCopy = '여자코트 추천';
    }
    setName(nameCopy);
  }
  return (
    <div className="App">
      <div className="black-nav">블로그임</div>
      {/* <h4>블로그 글 제목</h4> */}
      {/* <h4 style={ {color:'red', fontSize:'30px'}}>{post}</h4> */}
      <h4 style={ {color:'red', fontSize:'30px'}}>{name}</h4>
      <div>
        <button onClick={FnClick}>눌러보세요</button>
      </div>
      
      <div>
        {List}
      </div>
      
    </div>
  );
}

export default App;
