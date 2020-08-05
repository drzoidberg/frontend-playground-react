import React from 'react';

import classes from './FluidImage.module.css';

const FluidImage = (props) => (
    <div className={classes.imgContainer}>
        <div className={classes.Cropped}>
            <img
                {...props}
                alt={props.alt}
            />
        </div>
    </div>
);

export default FluidImage;

