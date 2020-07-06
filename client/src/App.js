import React, { Component } from "react";
import "./App.css";

import Critters from "./components/Critters";
import Controls from "./components/Controls";

export class App extends Component {
  state = {
    caught: false,
    month: false,
    now: false,
    bugs: [],
    fish: [],
    showFish: true,
    showBugs: true,
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/bugs")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bugs: data });
      });

    fetch("http://localhost:3001/api/fish")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ fish: data });
      });
  }

  onTypeSel = (selected, val) => {
    if (selected == "fish") {
      this.setState({ showFish: val });
    }
    if (selected == "bugs") {
      this.setState({ showBugs: val });
    }
  };

  onControl = (selected, val) => {
    this.setState({ [selected]: val });
  };

  render() {
    return (
      <div className="App">
        <Controls onSelected={this.onControl} onTypeSel={this.onTypeSel} />
        {this.state.showBugs && (
          <Critters
            type={"bugs"}
            critters={this.state.bugs}
            showOnlyCaught={this.state.caught}
            showOnlyMonth={this.state.month}
            showOnlyNow={this.state.now}
          />
        )}
        {this.state.showFish && (
          <Critters
            type={"fish"}
            critters={this.state.fish}
            showOnlyCaught={this.state.caught}
            showOnlyMonth={this.state.month}
            showOnlyNow={this.state.now}
          />
        )}
      </div>
    );
  }
}

export default App;
