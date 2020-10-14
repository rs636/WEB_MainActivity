import React from 'react';
import Signup from "./RUP-WEB/Signup.js";
import Login from "./RUP-WEB/Login.js";
import Home from "./RUP-WEB/Home.js";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./RUP-WEB/Header.js";

const App=()=>{
  return(
    <Router>
        <div>
          {/*<Header/> 버튼은 나중에 지울부분*/}
            {/* <Link exact to="/"><button>홈</button></Link>
            <Link to="/Login"><button>로그인</button></Link>
            <Link to="/Signup"><button>회원가입</button></Link> */}
            
            {/*exact를 써야 기본일때만 home가게해줌*/}
            <Route exact path="/" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={Signup}/>
        </div>
    </Router>
  );
};

export default App;
