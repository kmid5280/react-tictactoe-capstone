import React from 'react';
import {restartGame, xPlayerWin, oPlayerWin} from '../actions'
import {updateStats} from '../actions/users'
import {connect} from 'react-redux'


export class CheckWinner extends React.Component {
    
    
    isWin() {
        const {xWinner, oWinner, gameDraw} = this.props
        return xWinner || oWinner || gameDraw
        /*if ( 
            (xPlayer.includes(1) && xPlayer.includes(2) && xPlayer.includes(3)) || 
            (xPlayer.includes(1) && xPlayer.includes(4) && xPlayer.includes(7)) ||
            (xPlayer.includes(1) && xPlayer.includes(5) && xPlayer.includes(9)) ||
            (xPlayer.includes(2) && xPlayer.includes(5) && xPlayer.includes(8)) ||
            (xPlayer.includes(3) && xPlayer.includes(5) && xPlayer.includes(7)) ||
            (xPlayer.includes(3) && xPlayer.includes(6) && xPlayer.includes(9)) ||
            (xPlayer.includes(4) && xPlayer.includes(5) && xPlayer.includes(6)) ||
            (xPlayer.includes(7) && xPlayer.includes(8) && xPlayer.includes(9))
            ) {
              this.props.dispatch(xPlayerWin())
              return true;
              
            }
            else if ( 
                (oPlayer.includes(1) && oPlayer.includes(2) && oPlayer.includes(3)) || 
            (oPlayer.includes(1) && oPlayer.includes(4) && oPlayer.includes(7)) ||
            (oPlayer.includes(1) && oPlayer.includes(5) && oPlayer.includes(9)) ||
            (oPlayer.includes(2) && oPlayer.includes(5) && oPlayer.includes(8)) ||
            (oPlayer.includes(3) && oPlayer.includes(5) && oPlayer.includes(7)) ||
            (oPlayer.includes(3) && oPlayer.includes(6) && oPlayer.includes(9)) ||
            (oPlayer.includes(4) && oPlayer.includes(5) && oPlayer.includes(6)) ||
            (oPlayer.includes(7) && oPlayer.includes(8) && oPlayer.includes(9))
            ) {
                  this.props.dispatch(oPlayerWin())
                  return true;
                  
                }
            
            return false;*/
    }
    
    render() {
        const userId = this.props.userId
        if (this.isWin()) {
            let wins = this.props.wins
            let losses = this.props.losses
            let draws = this.props.draws
            let message = ''
            if (this.props.xWinner) {
                message = 'You win'
                wins = wins + 1
            }
            else if (this.props.oWinner) {
                message = 'You lose'
                losses = losses + 1
                
            }
            else if (this.props.gameDraw) {
                message = 'Nobody wins'
                draws = draws + 1
                
            }
            this.props.dispatch(updateStats(userId, wins, losses, draws))
            
            return (
                
                <div>
                    <p>{message}</p>
                    <p>Play again?</p>
                    <button onClick={() => this.props.dispatch(restartGame())}>Play again</button>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

const mapStateToProps = state => ({
    xPlayer: state.game.xPlayer,
    oPlayer: state.game.oPlayer,
    xWinner: state.game.xWinner,
    oWinner: state.game.oWinner,
    userId: state.auth.currentUser,
    gameDraw: state.game.gameDraw,    
    wins: state.auth.currentUser.wins,
    losses: state.auth.currentUser.losses,
    draws: state.auth.currentUser.draws
})

export default connect(mapStateToProps)(CheckWinner)