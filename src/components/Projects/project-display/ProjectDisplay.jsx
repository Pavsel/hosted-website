import React from "react";
import './project-display.css';
import Button from "../../button/Button";


class ProjectDisplay extends React.Component {

    render() {
        return (
            <div className="PD-container" style={{backgroundImage: `url(${this.props.backgroundImage})`}}>
                <div className='UI-container'>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <Button content="View Work" btnLink={this.props.link}/>
                </div>
            </div>
        );
    }
}

export default ProjectDisplay;
