import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';

export default class Won extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="result">WINNER!</div>
        <Link className="play-again" to='/quiz'>Play Again</Link>
      </div>
    )
  }
}
