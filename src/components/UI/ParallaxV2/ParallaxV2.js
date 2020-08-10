import React from 'react';

import classes from './ParallaxV2.module.css';

import bg from '../../../img/ParallaxV2/bg.jpg';
import moon from '../../../img/ParallaxV2/moon.png';
import mountain from '../../../img/ParallaxV2/mountain.png';
import road from '../../../img/ParallaxV2/road.png';

const ParallaxV2 = (props) => (
    <section className={`${classes.ParallaxV2} ${classes.Section}`}>
        <img src={bg} id="bg"/>
        <img src={moon} id="moon"/>
        <img src={mountain} id="mountain"/>
        <img src={road} id="road"/>
        <h2 id="text">Moon Light</h2>
    </section>
);

export default ParallaxV2;