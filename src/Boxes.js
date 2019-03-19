import React, {Component} from "react";
import "./Boxes.css";
import ColorBox from "./ColorBox";

class Boxes extends Component {
    static defaultProps = {
        bgColors: ["tomato", "purple", "cornflowerblue", "coral", "gold", "lavender", "lightSalmon", "Olive", "peachPuff", "papayaWhip", "peru", "seaGreen"],
        numBoxes: 16
    }
    constructor(props) {
        super(props);
        this.state = {
            colorBoxes: ["tomato", "purple", "cornflowerblue", "coral", "gold", "lavender", "lightSalmon", "Olive", "peachPuff", "papayaWhip", "peru", "seaGreen"]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // takes array and returns randomly selected item
    getRandomIdx(arr){
        return Math.floor(Math.random() * arr.length);
    }

    //onclick, randomly select a color in array of colors
    //and randomly pick and change the color
    handleClick(evt) {
        const randomIdx = this.getRandomIdx(this.state.colorBoxes);
        const randomColor = this.props.bgColors[this.getRandomIdx(this.props.bgColors)];
        this.setState(st => {
            let copy = st.colorBoxes.slice(0); //new copy of the old array
            copy.splice(randomIdx, 1, randomColor);
            return { colorBoxes: copy };
        });
    }
        
    render() {
        return (
            <div className="Boxes">
                { this.state.colorBoxes.map(color => <ColorBox bgColor={color}/>) }
                <button className="Boxes-change-btn" onClick={this.handleClick}>Change</button>
            </div>
        );
    }
}

export default Boxes;
