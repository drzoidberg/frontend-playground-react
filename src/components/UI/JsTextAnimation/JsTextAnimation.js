import React, { useRef, useEffect } from 'react';

import classes from './JsTextAnimation.module.css';

const JsTextAnimation = (props) => {
    const header = useRef(null);

    useEffect(() => {
        const strText = header.current.textContent;
        const splitText = strText.split('');

        let spannedStrText = '';
        splitText.map(letter => {
            return spannedStrText += `<span class=${classes.Span}>${letter}</span>`;
        });
        header.current.innerHTML = spannedStrText;

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick() {
            const span = header.current.querySelectorAll('span')[char]

            // span.classList.add(classes.Fade);
            span.classList.add(classes.ColorShift);
            char++;
            console.log(char);
            if (char === splitText.length) {
                complete();
                return;
            }
        }

        function complete() {
            clearInterval(timer);
            timer = null;
        }
    })

    return (
        <h1 className={`${classes.Fancy} ${classes.H1} ${classes.JsTextAnimation}`} ref={header}>Fancy Shmanzy</h1>
    )
};

export default JsTextAnimation;