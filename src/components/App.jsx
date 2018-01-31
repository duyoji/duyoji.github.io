import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ProfilePage from './ProfilePage';
import CareerPage from './CareerPage';
import LabPage from './LabPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={ProfilePage} />
        <Route exact={true} path="/profile" component={ProfilePage} />
        <Route exact={true} path="/career" component={CareerPage} />
        <Route exact={true} path="/lab" component={LabPage} />
      </div>
    );
  }
}

export default App;
