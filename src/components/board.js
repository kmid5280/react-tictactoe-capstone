import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    constructor(props) {
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
}

    render() {
        return (
            <main>
                <div className="board-wrapper">
                <div className="board-row-wrapper">
                    {this.state.board.row1}
                </div>
                <div className="board-row-wrapper">
                    {this.state.board.row2}
                </div>
                <div className="board-row-wrapper">
                    {this.state.board.row3}
                </div>
                </div>
            </main>
        )
    }
}