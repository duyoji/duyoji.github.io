import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import CareerPage from './CareerPage';
import ContactPage from './ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/profile" component={ProfilePage} />
        <Route exact={true} path="/career" component={CareerPage} />
        <Route exact={true} path="/contact" component={ContactPage} />
      </div>
    );
  }
}

export default App;
