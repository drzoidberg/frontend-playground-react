import React, { useEffect, useRef } from 'react';

import classes from './ParallaxV2.module.css';

import bgImg from '../../../img/ParallaxV2/bg.jpg';
import moonImg from '../../../img/ParallaxV2/moon.png';
import mountainImg from '../../../img/ParallaxV2/mountain.png';
import roadImg from '../../../img/ParallaxV2/road.png';

const ParallaxV2 = (props) => {
    const bgRef = useRef(null);
    const moonRef = useRef(null);
    const mountainRef = useRef(null);
    const roadRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // console.log(section.current.querySelectorAll('.layer'));
        let bg = bgRef.current;
        let moon = moonRef.current;
        let mountain = mountainRef.current;
        let road = roadRef.current;
        let text = textRef.current;

        const parallax = () => {
            let value = window.scrollY;

            bg.style.top = value * 0.5 + 'px';
            moon.style.left = -value * 0.5 + 'px';
            mountain.style.top = -value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text.style.top = value * 1 + 'px';
        }

        window.addEventListener('scroll', parallax);
    }, [])

    return (
        <section className={`${classes.ParallaxV2} ${classes.Section}`}>
            <img src={bgImg} ref={bgRef}/>
            <img src={moonImg} ref={moonRef}/>
            <img src={mountainImg} ref={mountainRef}/>
            <img src={roadImg} ref={roadRef} className={classes.Road}/>
            <h2 className={classes.Text} ref={textRef}>Moon Light</h2>
        </section>
    )
}

export default ParallaxV2;