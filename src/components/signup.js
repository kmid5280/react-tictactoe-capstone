import React from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form'
import './signup.css'
import {connect} from 'react-redux'
import {userSignup} from '../actions'

export class Signup extends React.Component {
    onSubmit(values) {
        this.props.dispatch(userSignup(values));
    }

    render() {
        return(
            <main>
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <div className="signup-wrapper">
                <label className="signup-enter-username">Enter username</label>
                <Field type="text" name="login-username" component="input" id="login-username" className="login-username"/>
                <label className="signup-enter-password">Enter password</label>
                <Field name="login-password" component="input" type="password" className="login-password" id="login-password" />
                <label className="signup-confirm-password">Confirm password</label>
                <Field name="login-password-confirm" component="input" type="password" className="login-password-confirm" id="login-password-confirm" />
                <button type="submit">Sign up</button>
            
                
            </div>
            </form>
            </main>
        )
    }
}

const form = reduxForm({
    form: 'signup'
})(Signup)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(form)