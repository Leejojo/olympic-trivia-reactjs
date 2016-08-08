import React from 'react';
import Header from './Header.jsx';
import Questions from './Questions.jsx';
import {getQuestions} from './lib/fake_api';

export default class App extends React.Component {

	// getting data.
	componentDidMount(){
		console.log('componentDidMount!')
	   getQuestions((data) => {
		   this.setState({questions: data})
		   // console.log(data);

	   })
	}

  render() {
  	if (this.state && this.state.questions){
	    return (
    	  <div className='app-container'>
			  <Header />
			  <Questions questions={this.state.questions} />
	      </div>
    	)
  	}else{
  		return <h1>loading ...</h1>
  	}
  }
  
}
 