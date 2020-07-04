import React, { Component } from "react";

export class CritterCatch extends Component {

  componentDidMount() {
    const times = this.props.times;
    const spltTimes = times.split(",").map(t=> t.replace('[', '').replace(']', '').replace(' ', ''))
    let twelveTime = ["all day"]
    if (spltTimes.length > 0){
      twelveTime = spltTimes.map(t => {
        if (t < 10) {
          return t.replace('0', '') + ' am'
        } else if (t < 12) {
          return t + ' am'
        } else {
          return t-12 + ' pm'
        }
      })
    }
    
    console.log(twelveTime)
  }
  

  render() {
    const { location, times, months } = this.props;
    return (
      <div>
        <p>
            {location}
            {times}
            {months}
        </p>
      </div>
    );
  }
}

export default CritterCatch;
