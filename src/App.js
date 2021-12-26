import React from "react";
import './App.css';

import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Art from "./components/Art/Art";
import Dance from "./components/Dance/Dance";

function App() {
    return (
        <>
            <Hero/>
            <div className="break"/>
            <div className="break"/>
            <Projects/>
            <div className="break">
                <div/>
            </div>
            <Art/>
            <div className="break">
                <div/>
            </div>
            {/*<Dance/>*/}
        </>
    );
}

export default App;
