import React from "react";
import './App.css';

import Hero from "./components/hero section/Hero";
import Projects from "./components/Projects/Projects";
import Art from "./components/Art/Art";
import Dance from "./components/Dance/Dance";
import ButtonBlack from "./components/button/button-black/ButtonBlack";

function App() {
    return (
        <>
            <Hero/>
            <section className="about-section">
                <div className="about-container">
                    <h1>About</h1>
                    <p><b>Hello! I am a game developer, an artist, a dancer, a website developer.</b> In this portfolio, you
                        will find some of my projects from all these categories.<b> This portfolio is fully responsive and
                            was created with React JS and hosted using GitHub pages and a domain provider.</b></p>
                </div>
            </section>
            <Projects/>
            <div className="break">
                <div/>
            </div>
            <Art/>
            <div className="break">
                <div/>
            </div>
            <Dance/>
        </>
    );
}

export default App;
