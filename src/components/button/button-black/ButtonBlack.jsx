import React from "react";
import './button-black.css';
import ButtonArrow from "../../../assets/black-button-arrow.png"


class ButtonBlack extends React.Component {


    render() {
        return (
            <button className="my-btn black"
                    onClick={() => window.open(this.props.btnLink, "_blank")}>
                <p>{this.props.text}</p>
                <img src={ButtonArrow} width={10}/>
            </button>
        );
    }
}

export default ButtonBlack;
