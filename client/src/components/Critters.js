import React, { Component } from "react";

import CritterItem from "./CritterItem";

export class Critters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  showOnlyCaught: this.props.showOnlyCaught
    };
  }

  render() {
    return this.props.bugs.map((bug) => {
      const hideBecauseCaught =
        this.props.showOnlyCaught && bug.status !== "uncaught";
      const now_m = new Date().getMonth() + 1;
      let ms = bug.months_northern
        .split(",")
        .map((t) =>
          parseInt(t.replace("[", "").replace("]", "").replace(" ", ""))
        );
      const hideBecauseMonth = this.props.showOnlyMonth && !ms.includes(now_m);
      const hideBecauseTime =
        this.props.showOnlyNow &&
        (!ms.includes(now_m) ||
        !this.checkTimeAvailable(bug.times));
      return (
        !hideBecauseCaught &&
        !hideBecauseMonth &&
        !hideBecauseTime && <CritterItem critter={bug} key={bug.id} available={(ms.includes(now_m) &&
            this.checkTimeAvailable(bug.times))}/>
      );
    });
  }

  checkTimeAvailable = (ts) => {
    let spltTimes = ts
      .split(",")
      .map((t) => t.replace(/\[/g, "").replace(/]/g, "").replace(/ /g, ""));
    const h_now = new Date().getHours();
    let available_t = false;
    if (spltTimes.length > 1) {
      for (let i = 0; i < spltTimes.length - 1; i += 2) {
        const a = spltTimes[i];
        const b = spltTimes[i + 1];
        if (a < b) {
          available_t = h_now > a && h_now < b;
        } else {
            // nocturnal
            available_t = h_now > a || h_now < b;
        }
      }
    } else {
      available_t = true;
    }
    return available_t
  };
}

export default Critters;
