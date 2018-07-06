import React from 'react';
import Square from './square';
import { clickSquare } from '../actions';
import {connect} from 'react-redux'
import './board.css'
import CheckWinner from './check-winner'
//import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login'
//import {logout} from '../actions/auth'
import LogoutButton from './logout-button'
import {Redirect} from 'react-router-dom'
//import Login from './login'
import {endGame} from "../actions/users";

export class Board extends React.Component {

switch(id) {

  const {xPlayer, oPlayer, totalSquares, squares , userId, authToken, wins, losses, draws} = this.props;

  let squareToUpdate = squares.find(square => square.id === id)
  let index = totalSquares.indexOf(id)

  squareToUpdate.container = 'X'
  xPlayer.push(id)
    if (index > -1) {
      totalSquares.splice(index, 1)
    }
    if (
        (xPlayer.includes(1) && xPlayer.includes(2) && xPlayer.includes(3)) ||
        (xPlayer.includes(1) && xPlayer.includes(4) && xPlayer.includes(7)) ||
        (xPlayer.includes(1) && xPlayer.includes(5) && xPlayer.includes(9)) ||
        (xPlayer.includes(2) && xPlayer.includes(5) && xPlayer.includes(8)) ||
        (xPlayer.includes(3) && xPlayer.includes(5) && xPlayer.includes(7)) ||
        (xPlayer.includes(3) && xPlayer.includes(6) && xPlayer.includes(9)) ||
        (xPlayer.includes(4) && xPlayer.includes(5) && xPlayer.includes(6)) ||
        (xPlayer.includes(7) && xPlayer.includes(8) && xPlayer.includes(9))
    ) {
      //player has won
      return this.props.dispatch(endGame(userId, authToken, wins + 1, losses, draws, true, false, false));
    }

    if (totalSquares.length) {


      let computerGuess = totalSquares[Math.floor( Math.random() * totalSquares.length )];
      squareToUpdate = squares.find(square => square.id === computerGuess)
      squareToUpdate.container = 'O'

      // <ComputerPlay />
      oPlayer.push(computerGuess)
      index = totalSquares.indexOf(computerGuess)
      if (index > -1) {
        totalSquares.splice(index, 1)
      }

      if (
          (oPlayer.includes(1) && oPlayer.includes(2) && oPlayer.includes(3)) ||
          (oPlayer.includes(1) && oPlayer.includes(4) && oPlayer.includes(7)) ||
          (oPlayer.includes(1) && oPlayer.includes(5) && oPlayer.includes(9)) ||
          (oPlayer.includes(2) && oPlayer.includes(5) && oPlayer.includes(8)) ||
          (oPlayer.includes(3) && oPlayer.includes(5) && oPlayer.includes(7)) ||
          (oPlayer.includes(3) && oPlayer.includes(6) && oPlayer.includes(9)) ||
          (oPlayer.includes(4) && oPlayer.includes(5) && oPlayer.includes(6)) ||
          (oPlayer.includes(7) && oPlayer.includes(8) && oPlayer.includes(9))
      ) {
        //computer has won
        return this.props.dispatch(endGame(userId, authToken, wins, losses + 1, draws, false, true, false));
      }
      else {
        return this.props.dispatch(clickSquare(squares, xPlayer, oPlayer, totalSquares))
      }

    }
    else {
      //game is a draw
      return this.props.dispatch(endGame(userId, authToken, wins, losses, draws + 1, false, false, true));
    }



}

    render() {
        
        if (!this.props.loggedIn) {
            
            return <Redirect to='/' />
            
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
                <div className="welcome-text">Welcome {username}! Please click a square to begin.</div>
                <div className="stats-text">Lifetime stats: {wins} wins, {losses} losses, {draws} draws.</div>
                <div className="board-wrapper">
                {squares}
                </div>
                <div className="space"></div>
                <CheckWinner />
                
            </main>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser,
    squares: state.game.squares,
    authToken: state.auth.authToken,
    username: state.auth.currentUser ? state.auth.currentUser.username : '',
    userId: state.auth.currentUser ? state.auth.currentUser.id : '',
    wins: state.auth.currentUser ? state.auth.currentUser.wins : '',
    losses: state.auth.currentUser ? state.auth.currentUser.losses : '',
    draws: state.auth.currentUser ? state.auth.currentUser.draws : '',
    xPlayer: state.game.xPlayer,
    oPlayer: state.game.oPlayer,
    totalSquares: state.game.totalSquares
})

export default requiresLogin()(connect(mapStateToProps)(Board))