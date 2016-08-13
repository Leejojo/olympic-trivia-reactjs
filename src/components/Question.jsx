import React from 'react';

export default class Question extends React.Component{
	constructor(props){
		super(props);
		this.state = {txt: "Question"};
		this.update = this.update.bind(this);
	}

	update(){
		this.setState({
			txt: this.props.question});
	}

	render(){
		return(
			<button onClick={this.update}>{this.state.txt}</button>
		)
	}
}
