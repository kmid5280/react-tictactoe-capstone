import React from 'react';
import {Link} from 'react-router-dom';
import './signup.css'

export default class Signup extends React.Component {
    onSubmit() {

    }

    render() {
        return(
            <main>
            <div className="signup-wrapper">
                <div className="signup-enter-username">Enter username</div>
                <input type="text" id="login-username" className="login-username"/>
                <div className="signup-enter-password">Enter password</div>
                <input type="password" className="login-password" id="login-password" />
                <div className="signup-confirm-password">Confirm password</div>
                <input type="password" className="login-password-confirm" id="login-password-confirm" />
            
                
            </div>
            </main>
        )
    }
}