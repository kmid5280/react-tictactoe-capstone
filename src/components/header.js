import React from 'react';
import './header.css'

export default class Header extends React.Component {
    render() {
        return (
            <header>
            <div className="header-wrapper">
                <h1 className="header-title">Tic Tac Toe</h1>
                
            </div>
            </header>
        )
    }
}