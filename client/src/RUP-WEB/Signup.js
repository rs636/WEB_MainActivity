import React, {useState} from 'react'
import './Signup.css'

const Signup = () => {
    const [id, setId]=useState(''); //id가 변수고 setId가 그 id변수를 설정해주는 함수?변수 느낌~
    const [pw, setPw]=useState('');
    const [pw2, setPw2]=useState('');
    const [email, setEmail]=useState('');
    const [bank, setBank]=useState('');
    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');

    const [passwordError,setPasswordError] = useState(false); //처음엔 false

    var regId = /^[A-za-z]{1}[A-za-z0-9]{4,14}/g;
    //첫글자는 무조건 영문, 그뒤로 영문 대문자, 소문자 숫자 포함5-15글자
    
    var regPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
    
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 이메일주소 형식 체크 정규식

    var regPhone=/^[0-9]{10,11}/;
    //폰번호 체크 정규식 숫자10-11글자
    
    const changeId=e=>{ //input에 id가 입력되면
        setId(e.target.value); //입력된걸 input text에 넣어줌
        //리액트에서는 이렇게 안해주면 입력이 안됨
    }
    const changePw=e=>{
        setPw(e.target.value);
    }
    const changePw2=e=>{
        setPasswordError(e.target.value !== pw); //password체크
        setPw2(e.target.value);
    }
    const changeEmail=e=>{
        setEmail(e.target.value);
    }
    const changeBank=e=>{
        setBank(e.target.value);
    }
    const changeName=e=>{
        setName(e.target.value);
    }
    const changePhone=e=>{
        setPhone(e.target.value);
    }

    const checkId=e=>{
        //아이디 중복체크(DB와 연동)
        //진혁승
    }

    
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!regId.test(id)){ //정규식에 안맞으면
            setId(""); //input text지워버리고
            alert("아이디 입력 양식에 맞게 입력해주세요");
            return false; //이게 되는지 확인해줘 현혁승!
        }
        if(!regPw.test(pw)){
            setPw("");
            alert("비밀번호 입력 양식에 맞게 입력해주세요");
            return false; //이게 되는지 확인해줘 현혁승!
        }
        if(!regEmail.test(email)){
            setEmail("");
            alert("이메일 입력 양식에 맞게 입력해주세요");
            return false; //이게 되는지 확인해줘 현혁승!
        }
        if(!regPhone.test(phone)){
            setPhone("");
            alert("전화번호 입력 양식에 맞게 입력해주세요");
            return false; //이게 되는지 확인해줘 현혁승!
        }
        //현혁승
        //마지막에 Home으로 돌아가게 만들어죠
        
    }
    return (
        <div id="mainSignup">
            {/*다음엔 텍스트 한줄이면 div말고 label써주기~
            그리고 줄구분하는거 소스 길거같으면 <br/>말고 div로 닫아서 구분하기*/}
           <h1>회원가입 화면입니다!</h1>
           <form>
           <div class="formdiv">아이디</div> <input class="inp" type="text" placeholder="ID" value={id} required onChange={changeId}/>
           &nbsp;<button id="checkId" onClick={checkId}>아이디 중복체크</button><br/> <div class="inpText">첫글자는 영문, 그뒤로 영문, 숫자 포함 5-15글자 입력</div>
           <div class="formdiv">비밀번호</div> <input class="inp" type="password" placeholder="PW" value={pw} required onChange={changePw}/><br/>
           <div class="inpText">숫자, 특문 1개 이상, 영문 2개 이상 사용해 8자리 이상 입력</div>
           <div class="formdiv">재입력</div> <input class="inp" type="password" placeholder="PW CHECK" value={pw2} required onChange={changePw2}/>
           {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}<br/>
           {/*비밀번호가 일치하지 않을때만 빨간글씨로 나타냄*/}
           <div class="formdiv">이메일</div> <input class="inp" type="text" placeholder="EMAIL" value={email} required onChange={changeEmail}/><br/>
           <div class="formdiv">이름</div> <input class="inp" type="text" placeholder="NAME" value={name} required onChange={changeName}/><br/>
           <div class="formdiv">전화번호</div> <input class="inp" type="text" placeholder="PHONE NUMBER" value={phone} required onChange={changePhone}/><br/>
           <div class="formdiv">계좌번호</div> <input class="inp" type="text" placeholder="BANK NUMBER" value={bank} required onChange={changeBank}/><br/>
           <br/><button id="Signup" type="primary" onClick={onSubmit}>가입하기</button>
           </form>
        </div>
    );
};

export default Signup;