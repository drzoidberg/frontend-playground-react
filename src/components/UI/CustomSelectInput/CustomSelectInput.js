import React from 'react';

import classes from './CustomSelectInput.module.css';


const CustomSelectInput = (props) => {
    return (
        <div className={classes.CustomSelectInput}>
            <select className={classes.Select}>
                <option value="">Lorem</option>
                <option value="">Voluptate?</option>
                <option value="">Quia</option>
                <option value="">Officia</option>
                <option value="">Perferendia</option>
            </select>
            <span className={classes.customArrow}></span>
        </div>
    );
};

export default CustomSelectInput;