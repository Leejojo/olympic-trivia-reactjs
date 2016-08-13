import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Choice from './Choice.jsx';

var green = '#39D1B4';
var red = '#FF0000';
var white = '#FFFFFF';

export default class ChoiceList extends Component {
  constructor(props) {
    super(props);
    this.state = { color: white };
  }
  
  changeColor() {
    var color = this.state.color == white ? red : white;
    this.setState({ color: color });
  }
  
  render() {
    return (
      <ul>
        {
          this.props.choices.map(function(choice) {
            return (
              <Choice
                key={choice.id}
                text={choice.text}
                is_correct={choice.is_correct}
              ></Choice>
            )
          })
        }
      </ul>
    )
  }

};
// choices={this.state.selected_question.choices}