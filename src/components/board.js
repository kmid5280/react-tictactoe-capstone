import React from 'react';
import Square from './square';
import { clickSquare } from '../actions';
import {connect} from 'react-redux'
import './board.css'

export class Board extends React.Component {
    /*constructor(props) {
    super(props)
    this.state = { 
        board: {
        row1: [<Square />, <Square />, <Square />],
        row2: [<Square />, <Square />, <Square />],
        row3: [<Square />, <Square />, <Square />]
        },
        playerTurn: 1,
        container: 'X'       
        
    }
}*/

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
            </main>
        )
    }
}

const mapStateToProps = state => ({
    squares: state.squares
})

export default connect(mapStateToProps)(Board)