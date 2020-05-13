import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
