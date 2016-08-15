import React from 'react';

export default class Header extends React.Component {


  render() {
    return (
      <div>
         <h1 className="header"> {this.props.header} </h1>
      </div>
    );
  }
  
}
