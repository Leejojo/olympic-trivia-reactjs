import React from 'react';

export default class Medals extends React.Component {
  constructor(props) {
    super(props);
  }

  medalSrc() {
    if (this.props.strikes == 0) {
      return "300px-Gold_medal_olympic.svg.png";
    } else if (this.props.strikes == 1) {
      return "300px-Silver_medal_olympic.svg.png";
    } else {
      return "Bronze_medal_olympic.svg";
    }
  }

  runner() {
    return <img className={`runner position-${this.props.categoriesWon}`} src="../../images/noun_17825_cc(1).png" />;
  }

  render() {
    return (
      <div className="race">
        <div className="runner-wrapper">{this.runner()}</div>
        <img className="medals" src={`../../images/${this.medalSrc()}`} />
        }
      </div>
    )
  }
}