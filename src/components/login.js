import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import './login.css'
import {login} from '../actions/auth'
import {required, nonEmpty} from '../validators';

export class Login extends React.Component {
   
    onSubmit(values) {
        return this.props.dispatch(login(values))
        .catch(err => {
            throw new SubmissionError({_error: err.errors._error})
        })
    }
    
    render() {
        let error;
        if (this.props.error) {
            
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        
        return(
            <main>
                <div className="login-wrapper">
                <h3 className="login-instructions">Instructions: Log in. Click on the tic-tac-toe grid to play. The game will keep track of your statistics. Have fun!</h3>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field component="input" placeholder="Enter username" name="username" type="text" id="login-username" className="login-username" validate={[required, nonEmpty]}/>
                    <Field type="password" placeholder="Enter password" component="input" name="password" className="login-password" id="login-password" validate={[required, nonEmpty]}/>
                    <button type="submit" className="login-submit-button">Sign in</button>
                    <div className="error-message">{error}</div>
                    <p className="login-no-account-text">Don't have an account? <Link className="signup-link" to='/signup'>Sign up!</Link> Or use 'demouser' as the username and password to try it out.</p>
                    
                    
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
