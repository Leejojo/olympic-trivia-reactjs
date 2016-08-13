import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';



export default class QuestionsList extends React.Component{


	render(){
		const questionsList = this.props.questions.map(function (question) {
			return <Question key={question.id} question={question.q} array={question.choices}/>

		})
		// console.log('questionsList')
		return ( 
      <h4>
		    {questionsList} 
      </h4>
		)

	}
}

