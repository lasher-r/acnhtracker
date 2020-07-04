import React, { Component } from 'react'

import CritterItem from "./CritterItem"

export class Critters extends Component {
    render() {
        return this.props.bugs.map((bug)=>(
            <CritterItem critter={bug}/>
        ));
    }
}

export default Critters
