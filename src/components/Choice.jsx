import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const red = '#FF0000';
const white = '#FFFFFF';

export default class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_selected: false
    }
  }

  getStyle() {
    if (!this.state.is_selected) {
      color: { white };
    } else {
      var color = this.props.is_correct ? green : red;
    }

    return {
      background: color
    }
  }

  selectChoice() {
    this.setState({
      is_selected: true
    });
  }
  
  render() {
    return (
      <li
        style={this.getStyle()}
        onClick={() => this.selectChoice()}
      >
        { this.props.text }
      </li>
    )
  }

};