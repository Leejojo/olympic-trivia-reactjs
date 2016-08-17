import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';

export default class Lost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="result">You Lost</div>
        <Link className="play-again" to='/'>Play Again</Link>
      </div>
    )
  }
}
