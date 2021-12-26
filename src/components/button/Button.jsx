import React from "react";
import './button.css';
import ButtonArrow from "../../assets/button-arrow.svg"


class Button extends React.Component {


    render() {
        return (
            <button className="my-btn"
                    onClick={() => window.open(this.props.btnLink, "_blank")}>
                <p>{this.props.content}</p>
                <img src={ButtonArrow}/>
            </button>
        );
    }
}

export default Button;
