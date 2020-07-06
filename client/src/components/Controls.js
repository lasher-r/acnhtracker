import React, { Component } from "react";

export class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {fish:true, bugs:true};
  }

  typeSel = (e) => {
    console.log("show ", e.target.id, e.target.checked)
    this.setState({[e.target.id]: e.target.checked})
    this.props.onTypeSel(e.target.id, e.target.checked)
  }

  sel = (e) => {
    this.props.onSelected(e.target.id, e.target.checked);
  };

  render() {
    return (
      <div>
        <p>
          <input id="bugs" type="checkbox" onChange={this.typeSel} checked={this.state.bugs}/> Show bugs
        </p>
        <p>
          <input id="fish" type="checkbox" onChange={this.typeSel} checked={this.state.fish}/> Show fish
        </p>
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
