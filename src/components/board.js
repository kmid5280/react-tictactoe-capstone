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


/*componentDidMount() {
    this.props.dispatch(fetchProtectedData())
}*/

switch(id) {
    this.props.dispatch(clickSquare(id))
}

    render() {
        
        if (!this.props.loggedIn) {
            
            return <Redirect to='/login' />
            
        }
        const squares = this.props.squares
            .map(square => <Square key={square.id} {...square} onClick={id => this.switch(id)}/>)
        const username = this.props.username
        const userId = this.props.userId
        const wins = this.props.wins
        const losses = this.props.losses
        const draws = this.props.draws
        
        
        return (
            
            <main>
                <LogoutButton />
                <div>Welcome {username}.</div>
                <div>Lifetime stats: {wins} wins, {losses} losses, {draws} draws.</div>
            
                <div className="board-wrapper">
                {squares}
                </div>
                <CheckWinner />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser,
    squares: state.game.squares,
    username: state.auth.currentUser ? state.auth.currentUser.username : '',
    userId: state.auth.currentUser ? state.auth.currentUser.userId : '',
    wins: state.auth.currentUser ? state.auth.currentUser.wins : '',
    losses: state.auth.currentUser ? state.auth.currentUser.losses : '',
    draws: state.auth.currentUser ? state.auth.currentUser.draws : '',

})

export default requiresLogin()(connect(mapStateToProps)(Board))