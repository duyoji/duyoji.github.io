import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import CareerPage from './CareerPage';
import ContactPage from './ContactPage';
import withGATracker from '../containers/withGATracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={withGATracker(HomePage)} />
        <Route exact={true} path="/profile" component={withGATracker(ProfilePage)} />
        <Route exact={true} path="/career" component={withGATracker(CareerPage)} />
        <Route exact={true} path="/contact" component={withGATracker(ContactPage)} />
      </div>
    );
  }
}

export default App;
