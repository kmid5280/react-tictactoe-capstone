import React from 'react';
import {Link} from 'react-router-dom';
import './login.css'

export default class Login extends React.Component {
    render() {
        return(
            <main>
            <div className="login-wrapper">
                <h3 className="login-header">Enter username and password</h3>
                <input type="text" id="login-username" className="login-username"/>
                <input type="password" className="login-password" id="login-password" />
                <p>Don't have an account? Sign up!</p>
                <Link to='/board'>Board</Link>
            </div>
            </main>
        )
    }
}