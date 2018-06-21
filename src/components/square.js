import React from 'react';
import './square.css'
import {clickSquare} from '../actions'
import {connect} from 'react-redux'

const Square = props => {
    const className = `square ${props.container} ${props.on?'':'off'}`
    // how to stylize x and o's?
    return (
        <div className={className} onClick={() => props.onClick(props.id)}><div className="container-symbol">{props.container}</div></div>
    )

}

export default Square
/*
export default class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            container: ''
            
        }
    }

    clickSquare(square) {
        this.props.dispatch(clickSquare(square))
    }

    render() {
        return (
            <div className="square" onClick={e => clickSquare(e)}>{this.props.container}</div>
            
        )
    }
   
}*/


/*{e => this.changeBox(e)}*/