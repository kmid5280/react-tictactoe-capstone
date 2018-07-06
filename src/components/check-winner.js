import React from 'react';
import {restartGame /*xPlayerWin, oPlayerWin*/} from '../actions'
//import {updateStats} from '../actions/users'
import {connect} from 'react-redux'
import './check-winner.css'


export class CheckWinner extends React.Component {
    
    
    isWin() {
        const {xWinner, oWinner, gameDraw} = this.props
        return xWinner || oWinner || gameDraw
    }
    
    render() {
        //const userId = this.props.userId
        //const authToken = this.props.authToken
        if (this.isWin()) {
            //let wins = this.props.wins
            //let losses = this.props.losses
            //let draws = this.props.draws
            let message = ''
            if (this.props.xWinner) {
                message = 'You win'
                
            }
            else if (this.props.oWinner) {
                message = 'You lose'
                
                
            }
            else if (this.props.gameDraw) {
                message = 'Draw'
                
                
            }
            
            return (
                
                <div className="endgame-wrapper">
                    <div className="endgame-inner-wrapper">
                        <p className="endgame-message">{message}. Play again?</p>
                        <button className="playagain-button" onClick={() => this.props.dispatch(restartGame())}>Play again</button>
                    </div>
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
    authToken: state.auth ? state.auth.authToken : null,
    userId: state.auth.currentUser ? state.auth.currentUser.id : null,
    gameDraw: state.game.gameDraw,    
    wins: state.auth.currentUser ? state.auth.currentUser.wins : '',
    losses: state.auth.currentUser ? state.auth.currentUser.losses : '',
    draws: state.auth.currentUser ? state.auth.currentUser.draws : '',
})

export default connect(mapStateToProps)(CheckWinner)