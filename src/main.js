import './main.scss';
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

import {Home} from './components/Home';
import {Message} from './components/Message';


class App extends React.Component {
  render() {
    return (
      // <Router history={browserHistory}>
      //     <Route path={'home'} component={Home}/>
      //     <Route path= {'message'} component={Message}/>
      // </Router>
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/message' component={Message} />
          <Route path='*' component={NotFound} />
        </Route>
    </Router>
    );
  }
}



const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/message'>Message</Link>&nbsp;
    <Link to='/about'>About</Link>
  </div>
);

const Container = (props) => <div>
<Nav />
  {props.children}
</div>;



const NotFound = () => <h1>404..</h1>;


render(<App />, window.document.getElementById('app'));
