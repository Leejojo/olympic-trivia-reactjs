import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Quiz from './Quiz.jsx';

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <Route path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Nav = () => (
  <div className="homepage-buttons">
    <Link className="button" to='/'>Home</Link>&nbsp;
    <Link className="button" to='/quiz'>Play Game</Link>
  </div>
)
const Container = (props) => <div>
  <Nav />
  {props.children}
</div>
const Home = () => <h1>Hello from Home!</h1>
const NotFound = () => (<h1>404.. This page is not found!</h1>)