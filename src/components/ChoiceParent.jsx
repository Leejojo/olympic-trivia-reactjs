import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChoiceList from './ChoiceList.jsx';


export default class ChoiceParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      choiceListItems: []
    }
  }

  render() {
    return (
      <div>
        <ChoiceList
          choices={this.state.choiceListItems}
        />
      </div>
    );
  }
};