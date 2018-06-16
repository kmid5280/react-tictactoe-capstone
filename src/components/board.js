import React from 'react';
import Square from './square';
import { clickSquare } from '../actions';
import {connect} from 'react-redux'
import './board.css'
import CheckWinner from './check-winner'
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login'
import {logout} from '../actions/auth'
import LogoutButton from './logout-button'
import {Link, Redirect} from 'react-router-dom'
import Login from './login'

export class Board extends React.Component {

componentDidMount() {
    this.props.dispatch(fetchProtectedData())
}

//watchForLogout() {
    //this.props.dispatch(logout())
//}

switch(id) {
    this.props.dispatch(clickSquare(id))
}

    render() {
        if (!this.props.loggedIn) {
            return <Login />
        }
        const squares = this.props.squares
            .map(square => <Square key={square.id} {...square} onClick={id => this.switch(id)}/>)
        
        return (
            
            <main>
                <LogoutButton />
            
                <div className="board-wrapper">
                {squares}
                </div>
                <CheckWinner />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    squares: state.game.squares  

})

export default requiresLogin()(connect(mapStateToProps)(Board))