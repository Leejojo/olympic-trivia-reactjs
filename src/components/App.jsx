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
    // early return if one of the categories is selected

    if (this.state.quiz.categories.some(function(category){
      return category.is_selected;
    })) return;

    var category = this.state.quiz.categories.find(function(category) {
      return category.id == categoryId;
    });

    category.is_selected = true;
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
              <Category key={category.id} category={category} selectCategory={this.selectCategory.bind(this)} />
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
 