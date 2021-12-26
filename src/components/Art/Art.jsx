import React from "react";
import './art.css';
import ButtonBlack from "../button/button-black/ButtonBlack";


function Art() {
    return (
        <section className="art-section">
            <div className="art-container">
                <h1>3D Art</h1>
                <p>Starting from assets for my games, I got into the world of 3D art. <b>I have over 4 years of expirience
                    using Blender 3D: modelling, sculpting, animation, making materials, lighting ect.</b>
                    <br/>
                    <br/>
                    I have created an Instagram account to display some of my work. Check it out below!</p>
                <ButtonBlack
                    text="Instagram"
                    btnLink="https://www.instagram.com/pav3d/"
                />
            </div>
        </section>
    );
}

export default Art;
