// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// //export is of initQ because this is what is interactive.
// export default class initQ extends React.Component{
// 	const questionsList = this.props.questions.map(function (question) {
// 		return <questionList />
//
// 	})
// 	constructor(){
// 		super();
// 		this.state = {txt: "Question"};
// 		this.update = this.update.bind(this);
// 	}
// 	update(){
// 		this.setState({txt: "what cha know?"});
// 	}
//
// 	render(){
// 		console.log('rendering!')
// 		return <button onClick={this.update}>{this.state.txt}</button>
// 	}
// }
//
//
// class Question extends React.Component{
// 	constructor(){
// 		super();
// 	}
// 	mount(){
// 		ReactDOM.render(<App />,document.getElementById('a'));
//
// 	}
// 	render(){
// 		return(
// 			<div >
// 				<button  onClick={this.mount.bind(this)}></button>
//
// 				<div id="a"></div>
// 			</div>
// 		)
// 	}
// }
//


// import React from 'react';
//
// export default class Question extends React.Component{


// 	render(){
// 		return(
// 			<div>
// 					<li> {this.props.question.id} </li>
// <li>{this.props.question.q}</li>
// 			</div>
// 		)
// 	}
// }