import React, { Component } from "react";

export class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  sel = (e) => {
    this.props.onSelected(e.target.id, e.target.checked);
  };

  render() {
    return (
      <div>
        <p>
          <input id="caught" type="checkbox" onChange={this.sel} /> Show only
          uncaught.
        </p>
        <p>
          <input id="month" type="checkbox" onChange={this.sel} /> Show only
          Available this month.
        </p>
        <p>
          <input id="now" type="checkbox" onChange={this.sel} /> Show only Available now.
        </p>
      </div>
    );
  }
}

export default Controls;
