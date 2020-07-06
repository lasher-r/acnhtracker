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
                <img src={icon_url} alt={name}/>
                <h3>{name}</h3>
                {/* <p>{status}</p> */}
                <select onChange={(val) => this.handleStateChange(val.target.value)} id="status" name="status">
                    <option value="uncaught" selected={status === "uncaught"}>Uncaught</option>
                    <option value="caught" selected={status === "caught"}>Caught</option>
                    <option value="donated" selected={status === "donated"}>Donated</option>
                </select>
                <p>{this.props.price} bells</p>
            </div>
        )
    }

    handleStateChange = (val) => {
        this.props.set_status(val)
    }
}

export default CritterIdent
