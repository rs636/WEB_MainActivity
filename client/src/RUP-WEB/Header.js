import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="item">홈</Link>
            <Link to="/Login" className="item">로그인</Link>
            <Link to="/Signup" className="item">회원가입</Link>
        </div>
    );
};

export default Header;