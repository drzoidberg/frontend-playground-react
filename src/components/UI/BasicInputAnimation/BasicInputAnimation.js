import React from 'react';

import Form from './Form/Form';
import Input from './Input/Input';

import classes from './BasicInputAnimation.module.css';

const BasicInputAnimation = (props) => (
    <Form>
        <Input
            autocomplete="off"
            name="name"
            placeholder="Escribe tu nombre"
            labelContent="Name"
            required
            type="text"
        />
    </Form>
);

export default BasicInputAnimation;