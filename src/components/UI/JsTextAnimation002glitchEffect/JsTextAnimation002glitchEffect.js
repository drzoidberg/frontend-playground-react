import React, { useRef, useEffect } from 'react';

import classes from './JsTextAnimation002glitchEffect.module.css';

const JsTextAnimation002glitchEffect = (props) => {
    // const header = useRef(null);

    useEffect(() => {
        // const strText = header.current.textContent;

    })

    return (
        <div className={classes.JsTextAnimation002glitchEffect}>
            <div
                className={classes.Text}
                data-text="I hate all"
            >
                I love you
            </div>
        </div>
    )
};

export default JsTextAnimation002glitchEffect;