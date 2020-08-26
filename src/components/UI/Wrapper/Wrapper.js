import React from 'react';

import classes from './Wrapper.module.css';

const Wrapper = (props) => (
    <div className={classes[`${props.wrappedComponent}`] + ' ' + classes.Wrapper }>
        {props.children}
    </div>
);

export default Wrapper;