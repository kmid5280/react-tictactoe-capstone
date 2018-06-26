import React from 'react';
import './square.css'
import {clickSquare} from '../actions'
import {connect} from 'react-redux'

const Square = props => {
    const className = `square ${props.container} ${props.on?'':'off'}`

    //do not make this square clickable if it already has a X or O
    const click = !props.container ? () => props.onClick(props.id) : () => {} ;
    return (
        <div className={className} onClick={click}><div className="container-symbol">{props.container}</div></div>
    )

}

export default Square