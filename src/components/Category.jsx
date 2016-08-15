import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  findNextQuestion() {
    return this.props.category.questions.find(function(question){
      return !question.is_answered;
    });
  }

  renderCategory() {
    if (!this.props.category.is_selected) {
      return <h3 onClick={() =>{if (!this.props.category.is_won) this.props.selectCategory(this.props.category.id)}} >{this.props.category.subject}</h3>;
    } else {
      return <Question question={this.findNextQuestion()} answerQuestion={this.props.answerQuestion} />;
    }
  }

  render() {
    return (
      <div className={this.props.category.is_won ? "circle won" : "circle"} style={this.props.category.is_won ? {background: this.props.category.color} : {border: `solid 20px ${this.props.category.color}`}}>
        {this.renderCategory()}
      </div>
    )
  }
}

// random question (never answered)

// <div>
//   {this.props.category.questions[0].text}

// </div>

export default Category;

