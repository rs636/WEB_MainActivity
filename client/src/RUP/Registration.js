import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Registration_inp from "./Registration_inp";

class Registration extends Component{
    render(){
      return (
        <Router>
          <h1><Link to="/registration_inp">{this.props.title}</Link></h1>
          {this.props.sub}
          <Route path="/registration_inp" component={Registration_inp}/>
        </Router>
      );
    }
  }//
  export default Registration;