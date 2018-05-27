import React from 'react';
import './square.css'
import {clickSquare} from '../actions'
import {connect} from 'react-redux'

export default class Square extends React.Component {
    /*constructor(props) {
        super(props)
        this.state = {
            container: ''
            
        }
    }*/

    clickSquare(square) {
        this.props.dispatch(clickSquare(square))
    }

    render() {
        return (
            <div className="square" onClick={e => clickSquare(e)}>{this.props.container}</div>
            
        )
    }
}

/*{e => this.changeBox(e)}*/