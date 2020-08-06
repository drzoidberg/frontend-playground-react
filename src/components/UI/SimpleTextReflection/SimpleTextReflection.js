import React from 'react';

import classes from './SimpleTextReflection.module.css';

const SimpleTextReflection = (props) => (
    <h1 contentEditable className={classes.SimpleTextReflection}><span className={classes.Highlight}>Always</span> test your code</h1>
    // <h1 className={classes.SimpleTextReflection}>Always test your code</h1>
);

export default SimpleTextReflection;