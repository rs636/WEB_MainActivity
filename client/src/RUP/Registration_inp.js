import React, {Component} from 'react';

class Registration_inp extends Component{
  constructor(props){
    super(props);
    this.state={
        title:'회원가입하기',
        sub:'새로운 아이디를 만드세요',
        id:'', pw:'',name:'',phone:'',
    }
  }
  idChange=(e)=>{
    this.setState({
        id: e.target.value
    })
}
pwChange=(e)=>{
    this.setState({
        pw:e.target.value
    })
}

nameChange=(e)=>{
    this.setState({
        name: e.target.value
    })
}
phoneChange=(e)=>{
    this.state({
        phone:e.target.value
    })
}
  render(){
    return(
      <div className="Registration_inp">
        <h1 title={this.state.title}></h1>
        {this.state.sub}
        <form>
            name: <input value={this.state.name} onChange="{this.nameChange}"/><br/>
            ID: <input value={this.state.id} onChange="{this.idChange}"/> <br/>
            PW: <input value={this.state.pw} onChange="{this.pwChange}"/><br/>
            phone: <input value={this.state.phone} onChange="{this.phoneChange}"/><br/>
        </form>
      </div>
    );
  }
}

export default Registration_inp;
