import React from 'react';

export default class Question extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				{this.props.question.text}
			  <ul>
			  	{
			  		this.props.question.choices.map((choice) => {
				  		return (
				  			<li onClick={() => this.props.answerQuestion(this.props.question.category_id, this.props.question.id, choice.id)} key={choice.id}>{choice.text}</li>
				  		)
				  	})
			  	}
			  </ul>
			</div>
		)
	}
}
