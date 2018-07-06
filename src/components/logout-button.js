import React from 'react'

import {logout} from '../actions/auth'
import {connect} from 'react-redux'
import './logout-button.css'



export class LogoutButton extends React.Component {
        
    handleClick() {
       this.props.dispatch(logout())
       //set loggedIn to false    
    }

    render() {
        return (
            <button className="logout-button" onClick={(e) => this.handleClick(e)}>Log out</button>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect()(LogoutButton)