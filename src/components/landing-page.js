import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import Login from './login'



export function LandingPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/board" />
    }

    return (
        <div>
            
            <Login />
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser
});

export default connect(mapStateToProps)(LandingPage);