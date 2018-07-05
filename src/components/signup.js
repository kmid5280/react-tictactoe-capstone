import React from 'react';
import {registerUser} from '../actions/users'
import {reduxForm, Field} from 'redux-form'
import './signup.css'
import {connect} from 'react-redux'
import {userSignup} from '../actions'
import {Link, Redirect} from 'react-router-dom';
import SignupForm from './signup-form'

export function Signup(props) {
    if (props.loggedIn) {
        return <Redirect to="/board" />
    }

    
    return(
        <main>
            <SignupForm />
            <Link className="login-link" to='/'>Back to main page</Link>
        </main>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Signup)