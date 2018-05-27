import React from 'react';
import './header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <h1 className="header-title">Welcome to Tic Tac Toe!</h1>
                <h3 className="header-instructions">Instructions: Log in. Click on the tic-tac-toe grid to play. The game will keep track of your statistics. Have fun!</h3>
            </div>
        )
    }
}