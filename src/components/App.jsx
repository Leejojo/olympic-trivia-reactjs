import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import Quiz from './Quiz.jsx';
import Won from './Won.jsx';
import Lost from './Lost.jsx';

export default class App extends React.Component {
  render() {
    return (

      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/won" component={Won} />
          <Route path="/lost" component={Lost} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>     
    )
  }

}

const Home = () => <Link className="button" to='/quiz'>Let's Play!</Link>
const NotFound = () => (<h1>404.. This page is not found!</h1>)
