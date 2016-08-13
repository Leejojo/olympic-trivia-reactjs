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
			step: 0

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
				<Questions key = {val.id} data={val.questions} step={this.state.step } color={val.color}>
					{val.subject}
				</Questions>
			)
			:"loading or something...";


		return (
			<div>
				<h1> {this.state.title} </h1>
				<p>{this.state.step} </p>
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
						catagory: val.subject,
						color: val.color,
						questions: val.questions
					}
					}
				);


				self.setState({
					title: responseData[0].name,
					catagories: qz

				});
			});


	}






}
