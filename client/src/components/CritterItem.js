import React, { Component } from "react";

import CritterIdent from "./CritterIdent";
import CritterCatch from "./CritterCatch";

class CritterItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       available: false
    }
  }
  

  getStyle = () => {
    const bg = this.props.available ? "#5eba7d" : "#f4f4f4"
    return {
      background: bg,
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      height: "225px",
    };
  };

  set_status = (status) => {
    fetch(`${window.location.href}api/${this.props.type}/${this.props.critter.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status:status})
    })
  }

  render() {
    const {
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
          <CritterIdent name={name} status={status} icon_url={icon_url} price={price} set_status={this.set_status}/>
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
