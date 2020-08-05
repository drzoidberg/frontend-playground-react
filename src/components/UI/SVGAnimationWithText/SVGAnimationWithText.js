import React, { Fragment } from 'react';

import AnimatedText from './AnimatedText/AnimatedText';
import Background from './Background/Background';


import classes from './SVGAnimationWithText.module.css';

const SVGAnimationWithText = (props) => (
    <Fragment>
        <AnimatedText />
        <Background />
    </Fragment>
);

export default SVGAnimationWithText;