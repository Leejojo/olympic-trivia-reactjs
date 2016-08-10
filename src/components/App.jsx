import React from 'react';
import {getQuestions} from '../lib/fake_api';
import Question from './Question.jsx';

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			questions: [],
			selectedQuestion: null
		}
	};


	// getting data.
	componentDidMount(){
		console.log('componentDidMount!');
	  	this._callAPI();
	}



	render() {
	console.log('render!');

	  const {selectedQuestion} = this.state;
	  console.log('selected question: ', selectedQuestion);

	  const quizData = this.state.questions.length > 0
	  ? this.state.questions.map(val =>
	    <Question key={val.id} selected={ selectedQuestion === val.id}>

	  		<button onClick={() => this.questionPicked(val.id, val.q)}>{val.c}</button>
		 </Question>

	  ):"loading or something...";

	return(
		<div className="app-container">
			{ quizData }
		</div>
	)
  	// if (this.state && this.state.questions){
	  //   return (
    	//   <div className='app-container'>
		// 	  <Header />
		// 	  <Questions questions={this.state.questions} />
	  //     </div>
    	// )
  	// }else{
  	// 	return <h1>loading ...</h1>
  	// }
  }

  _callAPI = () => {
	  console.log('call API');

	  const self = this;

	  getQuestions((data) => {
		  self.setState({questions: data})
	  });
  }
	questionPicked = (id, question) => {
		console.log('id: ', id);
		console.log('question: ', question);
		this.selectedQuestion = 1;

	}

}
 