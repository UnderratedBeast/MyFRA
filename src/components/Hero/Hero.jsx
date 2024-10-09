import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import heross from '../../assets/hero_image.png'
import herooo from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from "framer-motion"
import NumberCounter from 'number-counter'
function Hero() {

    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth<=769 ? true: false;
return (
    <div className="hero" id='hero'>
        <div className="blur hero-blur"></div>
        <div className="left-h">

            <Header/>
            {/* THE BEST AD */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}

                ></motion.div>
                <span>THE  BEST FITNESS CLUB IN THE TOWN</span>
                

            </div>
            {/* HERO HEADING */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>SHAPE </span>
                    <span>YOUR</span>
                </div>
                <div>
                    <span>IDEAL BODY</span>
                </div>
                <div>
                    <span>
                    IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
                    </span>
                </div>
            </div>

            {/* FIGUERS */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={70} delay='3' preFix="+"/>
                    </span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={978} start={500} delay='3' preFix="+"/>
                    </span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={50} start={10} delay='3' preFix="+"/>
                    </span>
                    <span>Fitness Programs</span>
                </div>
            </div>
            {/* HERO BUTTONS */}
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-h">
        <button className='btn'>Join Now</button>


        <motion.div
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem"}}
        transition={transition}
         className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 BPM</span>
        </motion.div>
        {/*HERO IMAGES*/}
        <img src= {heross} alt="" className='hero-image'/>
        <motion.img
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src= {herooo} alt="" className='hero-image-back'/>
        {/* CALORIES */}
        <motion.div 
        initial= {{right: '37rem'}}
        whileInView= {{right: '28rem'}}
        transition= {transition}
        className="calories">
            <img src={Calories} alt="" />
            <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
            
        </motion.div>


        </div>
    </div>
  )
}

export default Hero;
