import React, {Component} from "react";
import "./ColorBox.css";

class ColorBox extends Component {
    render() {
        let color = {backgroundColor: this.props.bgColor}
        return (
            <div className="ColorBox" style={color}></div>
        );
    }
}

export default ColorBox;