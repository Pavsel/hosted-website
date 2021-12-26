import React from "react";
import './projects.css';

import ChessMessCover from "../../assets/chess-mess-cover.png";
import HookManCover from "../../assets/hookman-cover.png";
import GraphingCover from "../../assets/3d-graphing-cover.png";

import ProjectDisplay from "./project-display/ProjectDisplay";
import ProjectDisplaySmall from "./project-display-small/ProjectsDisplaySmall";

function Projects() {
    return (
        <section className='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                <div className="left-half">
                    <div className="mrgn">
                        <ProjectDisplay
                            title="HookMan"
                            description="Android Mobile Game"
                            backgroundImage={HookManCover}
                            link="https://play.google.com/store/apps/details?id=com.Sipcan.HookMan"/></div>
                </div>
                <div className="right-half">
                    <div className="mrgn">
                        <ProjectDisplay
                            title="Chess Mess"
                            description="Game Jam - 48h solo"
                            backgroundImage={ChessMessCover}
                            link="https://ldjam.com/events/ludum-dare/48/chess-mess"/></div>
                    <div className="mrgn">
                        <ProjectDisplay
                            title="3D Graphing"
                            description="React Webapp"
                            backgroundImage={GraphingCover}
                            link="https://google.com"/></div>
                </div>
            </div>
            <div className="break"/>
            <div className='SP-container'>
                <ProjectDisplaySmall
                    title="Bail the Fail"
                    description="First Game Jam - 1 week with a friend."
                    link="https://itch.io/jam/blackthornprodgamejam2/rate/378616"
                />
                <ProjectDisplaySmall
                    title="YouTube"
                    description="Over 6K views on a tutorial video I uploaded."
                    link="https://www.youtube.com/watch?v=tPtKNvifpj0&t=454s"
                />
            </div>
            <div className="break"/>
        </section>
    );
}

export default Projects;
