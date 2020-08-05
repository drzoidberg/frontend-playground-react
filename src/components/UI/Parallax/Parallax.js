import React, { useEffect, useRef } from 'react';

import classes from './Parallax.module.css';

import img1 from '../../../img/Wrapper/1.png';
import img2 from '../../../img/Wrapper/2.png';
import img3 from '../../../img/Wrapper/3.png';
import img4 from '../../../img/Wrapper/4.png';
import img5 from '../../../img/Wrapper/5.png';
import img6 from '../../../img/Wrapper/6.png';
import img7 from '../../../img/Wrapper/7.png';
import img8 from '../../../img/Wrapper/8.png';
import img9 from '../../../img/Wrapper/9.png';
import img10 from '../../../img/Wrapper/10.png';

const Parallax = (props) => {
    const section = useRef(null)

    useEffect(() => {
        // console.log(section.current.querySelectorAll('.layer'));
            const parallax = (e) => {
                section.current.querySelectorAll('.layer').forEach(layer => {
                    const speed = layer.getAttribute('data-speed');
                    const x = (window.innerWidth - e.pageX * speed) / 100;
                    const y = (window.innerHeight - e.pageY * speed) / 100;

                    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
                })
            }
        document.addEventListener('mousemove', parallax);
    }, [])

    return (
        <section className={classes.Parallax} ref={section}>
            <img src={img1} data-speed={-5} className="layer" alt={img1}/>
            <img src={img2} data-speed={5} className="layer" alt={img2}/>
            <img src={img3} data-speed={2} className="layer" alt={img3}/>
            <img src={img4} data-speed={6} className="layer" alt={img4}/>
            <img src={img5} data-speed={7} className="layer" alt={img5}/>
            <img src={img6} data-speed={-2} className="layer" alt={img6}/>
            <img src={img7} data-speed={4} className="layer" alt={img7}/>
            <img src={img8} data-speed={6} className="layer" alt={img8}/>
            <img src={img9} data-speed={-7} className="layer" alt={img9}/>
            <img src={img10} data-speed={-5} className="layer" alt={img10}/>
            <h2 className={classes.Layer}>Parallax</h2>
        </section>
    )
};

export default Parallax;