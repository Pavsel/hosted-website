import React from 'react';
import './hero.css';
import IntroAnimation from '../../assets/hero-animation.mp4';
// import IntroAnimation from '../../assets/intr-anim.mp4';
import Arrow from '../../assets/arrow.png';
import {arrow, arrowBounce, scaleIn, sliderIn, staggerContainer} from '../variants.ts';
import {motion} from 'framer-motion';


function HeroSection() {
    return (
        <div className='background-container'>
            <motion.div
                variants={scaleIn} initial="initial" animate="animate" className='hero-container'>

                <video autoPlay muted className="hero-graphic">
                    <source src={IntroAnimation} type="video/mp4"/>
                </video>

                {/*<Image src={TestImage} fluid className="image"/>*/}

                <motion.div variants={staggerContainer} initial="initial" animate="animate"
                            className="title-container">
                    <motion.h1 variants={sliderIn}>
                        Pavel Ivanov - supplementary applications portfolio
                    </motion.h1>
                    <motion.p variants={sliderIn}>
                        * All of the content, animations, images, designs are original and were created specifically
                        for
                        this
                        portfolio
                    </motion.p>
                </motion.div>


                <motion.div className="arrow" variants={arrow}>
                    <motion.img src={Arrow} width='30px' variants={arrowBounce}/>
                </motion.div>
            </motion.div>
        </div>

    );
}

export default HeroSection;
