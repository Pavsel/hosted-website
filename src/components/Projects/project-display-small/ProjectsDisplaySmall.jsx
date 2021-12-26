import React from "react";
import './projects-display-small.css';

import Arrow from '../../../assets/arrow-side.png';

class ProjectDisplaySmall extends React.Component {

    render() {

        return (
            <div className="SP-border" onClick={() => window.open(this.props.link, "_blank")}>
                <div className="SP-UI-container">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="SP-image-container">
                    <img src={Arrow} width={50}/>
                </div>
            </div>
        );
    }
}

export default ProjectDisplaySmall;
