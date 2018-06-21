import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import './login.css'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import {required, nonEmpty} from '../validators';

export class Login extends React.Component {
   
    onSubmit(values) {
        this.props.dispatch(login(values));
        
    }
    
    render() {
        let error;
        if (this.props.error) {
            console.log(error)
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        
        return(
            <main>
                <div className="login-wrapper">
                    <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    {error}
                    <Field component="input" placeholder="Enter username" name="username" type="text" id="login-username" className="login-username" validate={[required, nonEmpty]}/>
                    <Field type="password" placeholder="Enter password" component="input" name="password" className="login-password" id="login-password" validate={[required, nonEmpty]}/>
                    <button type="submit" className="login-submit-button">Sign in</button>
                    <p className="login-no-account-text">Don't have an account? <Link to='/signup'>Sign up!</Link></p>
                    
                    
                    </form>
                </div>
            </main>
        )
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login)
