import React, { Fragment } from 'react';

import classes from './Input.module.css';


const Input = (props) => (
    // <input className={classes.Input} type={props.type} placeholder={props.placeholder} />
    <Fragment>
        <input className={classes.Input} {...props} placeholder=""/>
        <label
            for={props.name}
            className={classes.LabelName}
        >
            <span className={classes.ContentName}>{props.placeholder}</span>
        </label>
    </Fragment>
);

export default Input;