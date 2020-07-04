import React, { Component } from "react";

import CritterIdent from "./CritterIdent";
import CritterCatch from "./CritterCatch";

class CritterItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      height: "200px",
    };
  };

  

  render() {
    const {
      id,
      name,
      status,
      icon_url,
      price,
      location,
      times,
      months_northern,
    } = this.props.critter;

    return (
      <div style={this.getStyle()}>
        <div >
          <CritterIdent name={name} status={status} icon_url={icon_url} />
        </div>
        <div>
          <CritterCatch
            location={location}
            times={times}
            months={months_northern}
          />
        </div>
      </div>
    );
  }
}

export default CritterItem;
