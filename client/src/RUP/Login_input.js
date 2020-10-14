import React, { Component } from 'react';

class Login_input extends Component{
    constructor(props){
       super(props);
        this.state={
            id: '', pw: ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
      return (
        <form>
            <h1>{this.props.title}</h1>
            {this.props.sub}<br/>
            ID: <input type="text" name="id" placeholder="ID" value={this.state.id} onChange={this.handleChange}/><br/>
            PW: <input type="password" name="pw" placeholder="PW" value={this.state.pw} onChange={this.handleChange}/><br/>
            <button type="submit">로그인</button>
        </form>
      );
    }
  }
  export default Login_input;