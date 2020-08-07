import React from 'react';

import classes from './ElasticTabAnimation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faComment,
    faEnvelope,
    faHeart,
    faUser,
} from '@fortawesome/free-solid-svg-icons'

const ElasticTabAnimation = (props) => (
    <nav>
        <label for=""><a href="#nowhere"><FontAwesomeIcon icon={faHome} />Home</a></label>
        <label for=""><a href="#nowhere"><FontAwesomeIcon icon={faComment} />Inbox</a></label>
        <label for=""><a href="#nowhere"><FontAwesomeIcon icon={faEnvelope} />Contact</a></label>
        <label for=""><a href="#nowhere"><FontAwesomeIcon icon={faHeart} />Heart</a></label>
        <label for=""><a href="#nowhere"><FontAwesomeIcon icon={faUser} />About</a></label>

    </nav>
);

export default ElasticTabAnimation;