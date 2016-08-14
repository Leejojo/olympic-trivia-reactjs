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
			displayQuestions: true

		}
	}


	// getting data.
	componentDidMount() {
		console.log('componentDidMount!');
		this._callAPI();

	}


	render() {
		console.log('App render!');

		if (this.state.catagories.length > 0) {
			if (this.state.displayQuestions) {

				const questionPg = this.state.catagories.map(val =>
					<Questions key={val.id} >
						<button className="circleQ"
								style={{backgroundColor: val.color} }
								onClick={() => this.questionPicked(val)}>{val.subject}</button>
					</Questions>
				)

				return (
					<div>
						<div className="header">{this.state.title}</div>
						<div className="content"> {questionPg}</div>
					</div>
				)
			} else {
				debugger
				return (
					<div>
						<div className="header">{this.state.title}</div>
						<div className="content">  Display Quiz Here :) </div>
					</div>
				)
			}
		}else{
			return (<h1>loading page...</h1>)
		}




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

				//set state
				self.setState({
					title: responseData[0].name,
					catagories: qz,
					step: 0

				});
			});


	}

	questionPicked = (data) => {
		console.log('in question picked');
		debugger;
		this.setState({
			...data,
			selectedQuestion: data.id,
			displayQuestions: false
		});
	}




}
