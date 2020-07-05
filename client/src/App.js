import React, { Component } from "react";
import "./App.css";

import Critters from "./components/Critters";
import Controls from "./components/Controls";

export class App extends Component {
  state = {
    caught: false,
    month: false,
    now: false,
    bugs: [
    //   {
    //     "id": 77,
    //     "name": "Scorpion",
    //     "status": "uncaught",
    //     "icon_url": "https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/NH-Icon-scorpion.png/revision/latest?cb=20200401005429",
    //     "price": 8000,
    //     "location": "On the Ground",
    //     "times": "[[19, 04]]",
    //     "months_northern": "[5, 6, 7, 8, 9, 10]"
    // }
    // ,
    //   {
    //     id: 2,
    //     name: "Common bluebottle",
    //     status: "uncaught",
    //     icon_url:
    //       "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest?cb=20200401005428",
    //     price: 300,
    //     location: "Flying",
    //     times: "[04, 19]",
    //     months_northern: "[4, 5, 6, 7, 8]",
    //   },
    //   {
    //     id: 3,
    //     name: "Paper kite butterfly",
    //     status: "uncaught",
    //     icon_url:
    //       "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest?cb=20200401005429",
    //     price: 1000,
    //     location: "Flying",
    //     times: "[08, 19]",
    //     months_northern: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
    //   },
    ],
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/bugs")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bugs: data });
      });
  }

  onControl = (selected, val) => {
    this.setState({ [selected]: val });
  };

  render() {
    return (
      <div className="App">
        <Controls onSelected={this.onControl} />
        <Critters
          bugs={this.state.bugs}
          showOnlyCaught={this.state.caught}
          showOnlyMonth={this.state.month}
          showOnlyNow={this.state.now}
        />
      </div>
    );
  }
}

export default App;
