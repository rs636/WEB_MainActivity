import React, {useState} from 'react'
import './Login.css'

const Login = () => {
    const [id, setId]=useState('');
    const [pw, setPw]=useState('');
    const changeId=e=>{
        setId(e.target.value);
    }
    const changePw=e=>{
        setPw(e.target.value);
    }
    const onSubmit=()=>{
        //현혁승
        //마지막에 Home으로 돌아가게 만들어죠
    }
    return (
        <div id="mainLogin">
           <h1>로그인 화면입니다!</h1>
           <form onSubumit={onSubmit}>
           <div class="divLogin">아이디</div> <input class="inpLogin" type="text" placeholder="ID" value={id} required onChange={changeId}/> <br/>
           <div class="divLogin">비밀번호</div> <input class="inpLogin" type="password" placeholder="PW" value={pw} required onChange={changePw}/> <br/>
           <br/><button id="btnLogin" type="primary">로그인</button>
           </form>
        </div>
    );
};

export default Login;