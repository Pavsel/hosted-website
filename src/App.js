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
