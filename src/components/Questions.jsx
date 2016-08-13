import React, { Component } from 'react';


const Questions = (props) => {

	const color = props.color;
	const subject = props.subject;
	function buttonClickWrapper(e) {
		e.preventDefault();
		props.onClick(props);
	}
	return(

		<button key= {color} className="circleQ" style={{color: color } } onClick={buttonClickWrapper}>

			{ subject}

		</button>

	)
}

export default Questions;