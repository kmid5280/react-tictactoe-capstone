import React from 'react';
import './login.css'

export default class Login extends React.Component {
    render() {
        return(
            <div class="login-wrapper">
                <h3 class="login-header">Enter username and password</h3>
                <input type="text" id="username" />
                <input type="password" id="password" />
            </div>
        )
    }
}