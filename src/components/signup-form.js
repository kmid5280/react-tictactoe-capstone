import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import './signup-form.css'
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        
        const user = {username, password}
        return this.props.dispatch(registerUser(user))
        .then(console.log('running sign in'))
        .then(() => this.props.dispatch(login(values)))
        .catch(err => {
            console.log('signup error')
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
            )
        }
        return (
            
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                
                <div className="signup-wrapper">
                    {error}
                    
                    <Field validate={[required, nonEmpty, isTrimmed]} placeholder="Enter username" type="text" name="username" component="input" id="signup-username" className="signup-username"/>
                    <Field validate={[required, passwordLength, isTrimmed]} placeholder="Enter password" name="password" component="input" type="password" className="signup-password" id="signup-password" />
                    <Field name="passwordConfirm" component="input" placeholder="Confirm password" type="password" className="signup-password-confirm" id="signup-password-confirm" validate={[required, nonEmpty, matchesPassword]}/>
                    <button type="submit" className="signup-submit-button">Sign up</button>
                </div>
            </form>
            
        )
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(SignupForm)
