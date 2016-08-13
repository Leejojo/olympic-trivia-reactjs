import React from 'react';
import ReactDOM from 'react-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCategory() {
    if (!this.props.category.is_selected) {
      return <h3 onClick={() => this.props.selectCategory(this.props.category.id)} >{this.props.category.subject}</h3>;
    } else {
      return "question";
    }
  }

  render() {
    return (
      <div id='circle' style={{background: this.props.category.color}}>
        {this.renderCategory()}
      </div>)
    ;
  }
}

// <div>
//   {this.props.category.questions[0].text}
//   <ul>
//     <li>{this.props.category.questions[0].choices[0].text}</li>
//     <li>{this.props.category.questions[0].choices[1].text}</li>
//     <li>{this.props.category.questions[0].choices[2].text}</li>
//     <li>{this.props.category.questions[0].choices[3].text}</li>
//   </ul>
// </div>

export default Category;

