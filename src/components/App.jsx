import React from 'react';
import Header from './Header.jsx';
import {getQuiz} from './lib/fake_api';
import Category from './Category.jsx';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      quiz: getQuiz()
    };
  }
  // this.state.quiz is the entire json object

  selectCategory(categoryId) {
    if (this.state.quiz.categories.some(function(category){
      return category.is_selected;
    })) return;

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
      console.log("correct")
      category.is_won = true
      // increment points
    } else {
      console.log("nope!")
      // increment strikes
    }

    category.is_selected = false
    question.is_answered = true

    this.forceUpdate();
  }

  render() {
  	if (this.state.quiz){
	    return (
    	  <div className='app-container'>
			  <Header />
        {
          this.state.quiz.categories.map((category) => {
            return (
              <Category key={category.id} category={category} selectCategory={this.selectCategory.bind(this)} answerQuestion={this.answerQuestion.bind(this)}/>
            )
          })
        }
	      </div>
    	)
  	} else {
  		return <h1>loading ...</h1>
  	}
  }
  
}
 