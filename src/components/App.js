// implement redux with reducers

import React from 'react';

import './App.css';
import Header from './header';
import Board from './board';
import Login from './login';
import Signup from './signup';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      choices: '',
      winRate: '' //this will import the win/loss rate from the server
    }
  }



  restartGame() {
    this.setState({
      choices: ''
    })
  }

  generateWinRatio() {
    
  }

   render() {
    return (
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Route exact path='/' component={Login} />
            <Route exact path='/board' component={Board} />
            <Route exact path='/signup' component={Signup} />
          </main>
        
        </div>
      </Router>
    );
  }
}
