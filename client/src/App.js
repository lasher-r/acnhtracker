import React, {Component} from 'react';
import './App.css';

import Critters from './components/Critters'

export class App extends Component {
  state = {
    bugs: [
      {
        "id": 1,
        "name": "Common butterfly",
        "status": "uncaught",
        "icon_url": "https://vignette.wikia.nocookie.net/animalcrossing/images/3/3a/NH-Icon-commonbutterfly.png/revision/latest?cb=20200401005428",
        "price": 160,
        "location": "Flying",
        "times": "[04, 19]",
        "months_northern": "[1, 2, 3, 4, 5, 6, 9, 10, 11, 12]"
    },
    {
        "id": 2,
        "name": "Common bluebottle",
        "status": "uncaught",
        "icon_url": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest?cb=20200401005428",
        "price": 300,
        "location": "Flying",
        "times": "[04, 19]",
        "months_northern": "[4, 5, 6, 7, 8]"
    },
    {
        "id": 3,
        "name": "Tiger butterfly",
        "status": "uncaught",
        "icon_url": "https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest?cb=20200401005429",
        "price": 240,
        "location": "Flying",
        "times": "[04, 19]",
        "months_northern": "[3, 4, 5, 6, 7, 8, 9]"
    }
    ]
  }

  render() {
    return (
      <div className="App">
      <Critters bugs={this.state.bugs}/>
    </div>
    )
  }
}

export default App

