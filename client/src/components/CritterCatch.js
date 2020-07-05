import React, { Component } from "react";

export class CritterCatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      times: [],
    };
  }

  componentDidMount() {
    // time string
    const times = this.props.times;
    let spltTimes = times
      .split(",")
      .map((t) => t.replace(/\[/g, '').replace(/]/g, "").replace(/ /g, ""));

    this.setState({ spltTimes: spltTimes });
    let twelveTime = [];
    if (spltTimes.length > 0) {
      twelveTime = spltTimes.map((t) => {
        if (t === "00") {
          return "All Day";
        } else if (t < 10) {
          return t.replace("0", "") + "am";
        } else if (t < 12) {
          return t + "am";
        } else {
          return t - 12 + "pm";
        }
      });
    }
    this.setState({ times: twelveTime });

    // month string
    const m_now = new Date().getMonth() + 1;
    const splitMonths = this.props.months
      .split(",")
      .map((t) =>
        parseInt(t.replace("[", "").replace("]", "").replace(" ", ""))
      );
    this.setState({ available_m: splitMonths.includes(m_now) });
    const MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const months_strs = splitMonths.map((m) => {
      return MONTHS[m - 1];
    });
    this.setState({ months_str: months_strs.join(" ") });
  }

  render() {
    const { location } = this.props;
    let ms = this.state.months_str;
    return (
      <div>
        <h3>{location}</h3>
        <h3>
          {this.state.times.length > 1
            ? this.timesToString(this.state.times)
            : this.state.times}
        </h3>
        <h3>{ms}</h3>
        <h3>{this.state.last_chance ? "Last Chance" : ""}</h3>
      </div>
    );
  }

  timesToString = (times) => {
    let str = "";
    for (let i = 0; i < times.length - 1; i += 2) {
      str += times[i] + "-" + times[i + 1] + ", ";
    }
    return str.substr(0, str.length - 2);
  };
}

export default CritterCatch;
