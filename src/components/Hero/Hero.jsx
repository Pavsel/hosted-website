import React from "react";
import './hero.css';

import Arrow from "../../assets/arrow-down.png";

function Hero() {
    return (
        <section className='hero'>
            <div className="hero-container">
                <h1>Pavel Ivanov</h1>
                <p>Supplementary applications portfolio</p>
            </div>
            <img src={Arrow} width={30} className="arrow"/>
        </section>
    );
}

export default Hero;
