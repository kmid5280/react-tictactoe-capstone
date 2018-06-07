import React from 'react';
import Square from './square';
import { clickSquare } from '../actions';
import {connect} from 'react-redux'
import './board.css'
import CheckWinner from './check-winner'

export class Board extends React.Component {

switch(id) {
    this.props.dispatch(clickSquare(id))
}

    render() {
        const squares = this.props.squares
            .map(square => <Square key={square.id} {...square} onClick={id => this.switch(id)}/>)
        
        return (
            <main>
                <div className="board-wrapper">
                {squares}
                </div>
                <CheckWinner />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    squares: state.squares

})

export default connect(mapStateToProps)(Board)