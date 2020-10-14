import React from 'react';
import { post } from 'axios';

class UserAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            userPassword: '',
            userName: '',
            userBank: '',
            userEmail: '',
            userPhonenumber: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        
        this.setState({
            userID: '',
            userPassword: '',
            userName: '',
            userBank: '',
            userEmail: '',
            userPhonenumber: ''
        })
        
        //window.location.reload(); //페이지 새로고침
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addUser =() => {
        const url = '/api/user';
        const formData = new FormData();
        formData.append('userID', this.state.userID);
        formData.append('userPassword', this.state.userPassword);
        formData.append('userName', this.state.userName);
        formData.append('userBank', this.state.userBank);
        formData.append('userEmail', this.state.userEmail);
        formData.append('userPhonenumber', this.state.userPhonenumber);
        
        return post(url, formData, config);
    }

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;