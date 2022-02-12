import React from "react";
import './art.css';
import ButtonBlack from "../button/button-black/ButtonBlack";

import Img01 from "../../assets/Art Grid/Abstract Spin.jpg"
import Img02 from "../../assets/Art Grid/02.png"
import Img03 from "../../assets/Art Grid/03.png"
import Img04 from "../../assets/Art Grid/04.png"
import Img05 from "../../assets/Art Grid/05.png"
import Img06 from "../../assets/Art Grid/06.png"
import Img07 from "../../assets/Art Grid/07.png"
import Img08 from "../../assets/Art Grid/08.png"
import Img09 from "../../assets/Art Grid/09.png"
import Img10 from "../../assets/Art Grid/10.png"
import Img11 from "../../assets/Art Grid/11.png"
import Img12 from "../../assets/Art Grid/12.png"
import Img13 from "../../assets/Art Grid/13.png"
import Img14 from "../../assets/Art Grid/Shoe Edited.jpg"
import Img15 from "../../assets/Art Grid/render-less-grain.jpg"
import Img16 from "../../assets/Art Grid/render.png"
import Img17 from "../../assets/Art Grid/ezgif.com-gif-maker (2).gif"
import Img18 from "../../assets/Art Grid/ezgif.com-gif-maker (3).gif"
import Img19 from "../../assets/Art Grid/ezgif.com-gif-maker (5).gif"

function Art() {
    return (
        <section className="art-section">
            <div className="art-container">
                <h1>3D Art</h1>
                <p>Starting from assets for my games, I got into the world of 3D art. <b>I have over 4 years of
                    expirience
                    using Blender 3D: modelling, sculpting, animation, making materials, lighting ect.</b>
                    <br/>
                    <br/>
                    I have created an Instagram account to display some of my work. Check it out below!</p>
                <ButtonBlack
                    text="Instagram"
                    btnLink="https://www.instagram.com/pav3d/"
                />
            </div>
            <div className="gallery">
                <h1>More Art</h1>
                <img src={Img17}/>
                <img src={Img15}/>
                <img src={Img19}/>
                <img src={Img18}/>
                <img src={Img14}/>
                <img src={Img01}/>
                <img src={Img16}/>
                <img src={Img02}/>
                <img src={Img03}/>
                <img src={Img04}/>
                <img src={Img05}/>
                <img src={Img06}/>
                <img src={Img07}/>
                <img src={Img08}/>
                <img src={Img09}/>
                <img src={Img10}/>
                <img src={Img11}/>
                {/*<img src={Img12}/>*/}
                {/*<img src={Img13}/>*/}
            </div>
        </section>
    );
}

export default Art;
