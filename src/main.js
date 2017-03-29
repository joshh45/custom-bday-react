import './main.scss';
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Home} from './components/Home';
import {Message} from './components/Message';


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path={'home'} component={Home}/>
          <Route path= {'message'} component={Message}/>
      </Router>
    );
  }
}


render(<App />, window.document.getElementById('app'));
