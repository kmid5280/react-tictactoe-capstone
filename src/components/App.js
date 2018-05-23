import React from 'react';

import './App.css';
import Header from './header';
import Board from './board';
import Login from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      choices: ''
    }
  }

  restartGame() {
    this.setState({
      choices: ''
    })
  }

  makeChoice(choice) {
    
  }
  
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Login />
        </main>
        
      </div>
    );
  }
}
