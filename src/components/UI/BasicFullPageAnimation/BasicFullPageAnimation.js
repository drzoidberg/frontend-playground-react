import React, { Fragment } from 'react';

import Section from './Section/Section';

import classes from './BasicFullPageAnimation.module.css'

const BasicFullPageAnimation = (props) => {
    return (
        <Fragment>
            <Section title="Home Decoration"/>
            <Section
                title="Different Styles"
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut consequuntur odio impedit architecto debitis magni eaque quia quam molestiae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas placeat cum modi voluptas dolores praesentium distinctio? Recusandae, nisi maiores!</p>
            </Section>
            <Section title="Home Destruction"/>
        </Fragment>
    );
};

export default BasicFullPageAnimation;