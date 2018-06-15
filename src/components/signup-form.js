
import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const stats = [0,0,0] //wins, losses, draws
        const user = {username, password, stats}
        return this.props.dispatch(registerUser(user)).then(() => this.props.dispatch(login(username, password)))
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className="signup-wrapper">
                    <label className="signup-enter-username">Enter username</label>
                    <Field validate={[required, nonEmpty, isTrimmed]} type="text" name="username" component="input" id="login-username" className="login-username"/>
                    <label className="signup-enter-password">Enter password</label>
                    <Field validate={[required, passwordLength, isTrimmed]} name="password" component="input" type="password" className="login-password" id="login-password" />
                    <label className="signup-confirm-password">Confirm password</label>
                    <Field name="passwordConfirm" component="input" type="password" className="login-password-confirm" id="login-password-confirm" validate={[required, nonEmpty, matchesPassword]}/>
                    <button type="submit">Sign up</button>
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