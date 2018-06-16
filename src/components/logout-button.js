import React from 'react'

import {Link, Redirect} from 'react-router-dom'
import {logout} from '../actions/auth'
import {connect} from 'react-redux'



export class LogoutButton extends React.Component {
        
    handleClick() {
       this.props.dispatch(logout())
       //set loggedIn to false
       
        
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>Log out</button>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect()(LogoutButton)