import React, { Component } from 'react';

const Question = (props) => {
	const classes = props.selected ? 'question selected' : 'question';
	return <div className={ classes }>
		{ props.children }
	</div>;
};

export default Question;