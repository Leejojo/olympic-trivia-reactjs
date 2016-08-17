import React from 'react';

export default class Medals extends React.Component {
  constructor(props) {
    super(props);
  }

  medal() {
    if (this.props.strikes == 0) {
      return <img src="../../images/300px-Gold_medal_olympic.svg.png" />;
    } else if (this.props.strikes == 1) {
      return <img src="../../images/300px-Silver_medal_olympic.svg.png" />;
    } else {
      return <img src="../../images/Bronze_medal_olympic.svg" />;
    }

  }

  render() {
    return (
      <div>{this.medal()}</div>
    )
  }
}