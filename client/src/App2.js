


import React, {Component} from 'react';
import './App.css';
import {RouteComponentProps} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Registration_inp from "./RUP/Registration_inp";

class App2 extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'main',
      main: {title: '메인 화면', sub:'rup를 사용해주셔서 감사합니다'},
      login: {title: '로그인 화면', sub: '로그인 해주세요'},
      registration: {title: '회원가입 화면', sub: '아이디를 만들어주세요'}
    }
  }
  handleClick=(e)=>{
    this.setState({
      mode:'login'
    })
  }
  doAction(){
    this.setState({
      mode:'registration'
    })
  }
 render(){
   var mode=this.state.mode;
  return(
    <header>
      <h1>{this.state.main.title}</h1>
      {this.state.main.sub}<br/>
      <button onClick={this.handleClick}>로그인</button>
      <button onClick={()=>this.props.history.push("/Registration_inp")}>회원가입</button>
      <Router>
          <h1><Link to="/registration_inp">{this.props.title}</Link></h1>
          {this.props.sub}
          <Route path="/registration_inp" component={Registration_inp}/>
      </Router>
    </header>
  );
 }
}

export default App2;

// import TOC from "./components/TOC";
// import Content from "./components/Content";
// import Subject from "./components/Subject";

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       mode: 'subject',
//       subject: {title:'WEB', sub:'world wide web!'},
//       welcome:{title:'welcome', desc:'hello react!!'},
//       contents: [
//         {id:1, title:'HTML', desc:'HTML is for information'},
//         {id:2, title:'CSS', desc:'CSS is for design'},
//         {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
//       ]
//     }
//   }
//   render(){
//     var _title, _desc=null;
//     if(this.state.mode==='welcome'){
//       _title=this.state.welcome.title;
//       _desc=this.state.welcome.desc;
//     }
//     else if(this.state.mode==='read'){
//       _title=this.state.contents[0].title;
//       _desc=this.state.contents[0].desc;
//     }
//   return (
//     <div className="App">
//       {/*<Subject
//         title={this.state.subject.title}
//         sub={this.state.subject.sub}>
//       </Subject> */}
//       <header>
//           <h1><a href="/" onClick={function(e){
//             console.log(e);
//             e.preventDefault();
//             //이벤트를 호출하는 함수 안에서는 this값이 undefined임
//             //뒤에 bind(this)해주면 this가 컴포넌트가 됨
//             //this.state.mode='welcome'; 아래처럼해야바뀜
//             this.setState({mode:'welcome'});
//           }.bind(this)}>{this.state.subject.title}</a></h1>
//           {this.state.subject.sub}
//         </header>
//       <Subject title="React" sub="For UI"></Subject>
//       <TOC data={this.state.contents}></TOC>
//       <Content title={_title} desc={_desc}></Content>
//     </div>
//   );
//   }
// }

// export default App;
