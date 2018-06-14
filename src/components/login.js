import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import './login.css'
import {connect} from 'react-redux'
//import {userLogin} from '../actions'
import {login} from '../actions/auth'
import {required, nonEmpty} from '../validators';

export class Login extends React.Component {
   
    onSubmit(values) {
        this.props.dispatch(login(values));
        
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
                    <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    {error}
                    <label className="login-header">Username</label>
                    <Field component="input" name="username" type="text" id="login-username" className="login-username" validate={[required, nonEmpty]}/>
                    <Field type="password" component="input" name="password" className="login-password" id="login-password" />
                    <button type="submit">Sign in</button>
                    <p>Don't have an account? <Link to='/signup'>Sign up!</Link></p>
                    <Link to='/board'>Board</Link>
                    
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
