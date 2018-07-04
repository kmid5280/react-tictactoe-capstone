import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import './login.css'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import {required, nonEmpty} from '../validators';
import Input from './input'

export class Login extends React.Component {
   
    onSubmit(values) {
        this.props.dispatch(login(values));
        
    }
    
    render() {
        let error;
        if (this.props.error) {
            console.log(this.props.error)
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
                    <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                    .catch(error => {
                        // how you pass server-side validation errors back is up to you
                        if(error.validationErrors) {
                          throw new SubmissionError(error.validationErrors)
                        }
                    })
                    )}>
                    {error}

                    <Field component="input" placeholder="Enter username" name="username" type="text" id="login-username" className="login-username" validate={[required, nonEmpty]}/>
                    <Field type="password" placeholder="Enter password" component="input" name="password" className="login-password" id="login-password" validate={[required, nonEmpty]}/>
                    <button type="submit" className="login-submit-button">Sign in</button>
                    <p className="login-no-account-text">Don't have an account? <Link to='/signup'>Sign up!</Link> Or use 'demouser' as the username and password to try it out.</p>
                    
                    
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
