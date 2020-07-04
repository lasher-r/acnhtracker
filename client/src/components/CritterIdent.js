import React, { Component } from 'react'

export class CritterIdent extends Component {

    boxStyle = () => {
        return {
          float: "left",
          height: "200px",
          width: "200px"
        };
    }

    render() {
        const {
            name,
            status,
            icon_url
        } = this.props
        return (
            <div style={this.boxStyle()}>
                <img src={icon_url}/>
                <h3>{name}</h3>
                <p>{status}</p>
            </div>
        )
    }
}

export default CritterIdent
