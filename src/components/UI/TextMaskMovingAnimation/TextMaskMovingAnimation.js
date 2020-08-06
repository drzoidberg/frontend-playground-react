import React, { useRef, useEffect } from 'react';

import classes from './TextMaskMovingAnimation.module.css';

const TextMaskMovingAnimation = (props) => {
    const urlGif = 'https://media1.giphy.com/media/65R80T3r72EGTzlNad/giphy.gif?cid=ecf05e47at8sxpfl2fv36kblyyaqt5eqilbu56sb5gfeotbd&rid=giphy.gif';
    const bg = useRef(null)

    useEffect(() => {
        // console.log(bg.current.querySelectorAll('.layer'));
            const bgMove = (e) => {
                // console.log('bg.current', bg.current);
                bg.current.querySelectorAll(classes.TextMaskMovingAnimation)
                const cursorX = e.pageX;
                const cursorY = e.pageY;
                const tranX = ((8 * cursorX) / 570) + 40;
                const tranY = ((8 * cursorY) / 570) + 50;

                // console.log({tranX, tranY});
                bg.current.style.backgroundPosition = tranX + '%' + tranY + '%';

            }
        document.addEventListener('mousemove', bgMove);
    }, [])

    return (
        <div className={classes.Container}>
            <div
                className={classes.TextMaskMovingAnimation}
                style={{backgroundImage: `url(${urlGif})`}}
                ref={bg}
            >An SSL error has occured and a secure connection to the server cannot be made</div>
        </div>
    );
};

export default TextMaskMovingAnimation;