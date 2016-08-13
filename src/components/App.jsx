import React from 'react';
import fetch from 'isomorphic-fetch';
import Questions from './Questions.jsx';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: null,
			catagories: '',
			user_answers: [],
			step: 0,
			selectedQuestion: null

		}
	}


	// getting data.
	componentDidMount() {
		console.log('componentDidMount!');
		this._callAPI();

	}


	render() {
		console.log('render!');

		if (!this.state) {
			return <div> umm, wonder what happened </div>
		}
		const { selectedQuestion } = this.state;

		const color = this.state.catagories.length > 0 ?
			this.state.catagories.map(val =>
				<Questions key = {val.id}
						   color={val.color}
						   subject={val.subject}
						   questions={val.questions}
						   step={this.state.step}
						   onClick={this._buttonClickedHandler}
				></Questions>
			)
			:"loading or something...";


		return (
			<div>
				<h1> {this.state.title} </h1>
				<div >{color}</div>



			</div>
		)
	}

	_callAPI = () => {
		const self = this;

		fetch('../src/lib/fake_api.json')
			.then(responseData => responseData.json())
			.then(responseData => {

				const qz = responseData[0].categories.map( val =>
					{return {
						subject: val.subject,
						color: val.color,
						questions: val.questions
					}
					}
				);


				// const cc = [];
				// for (var i = 0; i < responseData[0].categories.length; i++) {
				// 	const catgLst = {
				// 		catagory: responseData[0].categories[i].subject,
				// 		color: responseData[0].categories[i].color,
				// 	}
				// 	cc.push(catgLst);
				// }

				// for (var i=0; i < responseData[0].catagories[0].questions.length; i++){
				// 	const qq = {
				// 		qstn: responseData[0].catagories[0].questions[i].question_text
				// 	}
				// }

				// const qz = f(responseData[0].categories, cc){
				// 	for()
				// }

				//set state
				self.setState({
					title: responseData[0].name,
					catagories: qz

				});
			});


	}
	_buttonClickedHandler = (quizInfo) => {
		console.log('in button handler');


	}




}
