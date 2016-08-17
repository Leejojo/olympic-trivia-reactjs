import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import Quiz from './Quiz.jsx';
import Results from './Results.jsx';

export default class App extends React.Component {
  render() {
    return (

      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/results" component={Results} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>     
    )
  }

}

const Home = () => <Link className="button" to='/quiz'>Play Game</Link>
const NotFound = () => (<h1>404.. This page is not found!</h1>)
