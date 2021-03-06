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
                            description="Android Mobile Game. Made with Unity 3D and C# from scratch in about 1 week."
                            backgroundImage={HookManCover}
                            link="https://play.google.com/store/apps/details?id=com.Sipcan.HookMan"/></div>
                </div>
                <div className="right-half">
                    <div className="mrgn">
                        <ProjectDisplay
                            title="Chess Mess"
                            description="Game Jam - 48h solo. Created using Unity3D, Blender 3D, LMMS, and Audacity."
                            backgroundImage={ChessMessCover}
                            link="https://ldjam.com/events/ludum-dare/46/chess-mess"/></div>
                    <div className="mrgn">
                        <ProjectDisplay
                            title="3D Graphing"
                            description="Hyperbolic graphing webapp. Created with React JS, and three.js library"
                            backgroundImage={GraphingCover}
                            link="https://3d.pavel-ivanov.ca/"/></div>
                </div>
            </div>
            <div className="break">
                <div/>
            </div>
            <div className='SP-container'>
                <h1>More Projects</h1>
                <ProjectDisplaySmall
                    title="Bail the Fail"
                    description="First Game Jam - 1 week with a friend. Placed TOP20, created a 3D space farming game using Unity3D with C#."
                    link="https://itch.io/jam/blackthornprodgamejam2/rate/378616"
                />
                <ProjectDisplaySmall
                    title="YouTube"
                    description="Over 6K views on a tutorial video I uploaded. I learned a lot about video SEO and am really looking to going back and making more."
                    link="https://www.youtube.com/watch?v=tPtKNvifpj0&t=454s"
                />
            </div>
        </section>
    );
}

export default Projects;
