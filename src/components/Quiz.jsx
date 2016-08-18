import React from 'react';
import { hashHistory } from 'react-router';
import Category from './Category.jsx';
import Medals from './Medals.jsx';
import $ from "jquery";

export default class Quiz extends React.Component {

  constructor() {
    super();
    this.state = {
      strikes: 0,
      categoriesWon: 0
    };
  }

  loadQuizFromServer() {
    $.ajax({
      url: "http://localhost:3000/api/quizzes/6",
      dataType:'json',
      success: (quiz) => {
        this.setState({quiz: quiz});
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadQuizFromServer();
  }

  selectCategory(categoryId) {
    if (this.state.quiz.categories.some(function(category){
      return category.is_selected;
    })) return;
    //early return

    var category = this.findCategory(categoryId);

    category.is_selected = true;
    this.forceUpdate();
  }

  findCategory(categoryId) {
    return this.state.quiz.categories.find(function(category) {
      return category.id == categoryId;
    });
  }

  answerQuestion(categoryId, questionId, choiceId) {
    var category = this.findCategory(categoryId);
    var question = category.questions.find(function(question) {
      return question.id == questionId;
    })
    var choice = question.choices.find(function(choice) {
      return choice.id == choiceId;
    })

    if (choice.is_correct) {
      this.state.categoriesWon += 1
      console.log("categories won: ", this.state.categoriesWon)
      category.is_won = true
    } else {
      this.state.strikes += 1
      console.log("strikes: ", this.state.strikes)
    }

    category.is_selected = false
    question.is_answered = true

    if (this.state.strikes >= 3 ){
      this.state.quiz.is_over = true
      hashHistory.push('/lost')
    }

    if (this.state.categoriesWon >= 5){
      this.state.quiz.is_over = true
      hashHistory.push('/won')
    }
    this.forceUpdate();
  }

  render() {
    if (this.state.quiz){
      return (
        <div className="app">
          <Medals strikes={this.state.strikes} categoriesWon={this.state.categoriesWon}/>
          <a className="categories-container">
            {this.state.quiz.categories.map((category) => {
              return (
                <Category key={category.id} category={category} selectCategory={this.selectCategory.bind(this)} answerQuestion={this.answerQuestion.bind(this)}/>
              )
            })}
          </a>
        </div>
      )
    } else {
      return <h1>loading ...</h1>
    }
  }
}
