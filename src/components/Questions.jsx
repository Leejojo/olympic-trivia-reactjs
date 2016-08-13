import React, { Component } from 'react';

const Questions = ({data, step, color}) =>{
	console.log({data});
	console.log({step});
	console.log({color});


	return(
		<button className="circleQ" style={{backgroundColor: color}}>

			{ data[0].question_text }

		</button>

	)
}

export default Questions;