// implement redux with reducers

import React from 'react';

import './App.css';
import Header from './header';
import Board from './board';
import Login from './login';
import LandingPage from './landing-page'
import Signup from './signup';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {refreshAuthToken} from '../actions/auth'

export class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      choices: '',
      winRate: '' //this will import the win/loss rate from the server
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    }
    else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }  
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
}

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
}


  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <header>
            <Header />
          </header>
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/board' component={Board} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
          </main>
        
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(App);