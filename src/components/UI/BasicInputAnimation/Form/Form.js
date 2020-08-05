import React, { Fragment } from 'react';

import classesForm from './Form.module.css';
import classesInput from '../Input/Input.module.css';

const Form = (props) => (
    <Fragment>
        {/* <form className={`${classesForm.Form} ${classesInput.Input}`} {...props}> */}  {/* for chaining different css modules on to one element! */}
        <form className={`${classesForm.Form} ${classesInput.Input}`} {...props}>
            {props.children}
        </form>
    </Fragment>
);

export default Form;