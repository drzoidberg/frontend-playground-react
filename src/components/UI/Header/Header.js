import React from 'react';

import classes from './Header.module.css';

const Header = (props) => (
    <div className={classes.Wrapper}>
        <div className={classes.Container}>
            <h1>List of components</h1>
            <ul className={classes.Header}>
                {props.list.map((listItem) =>
                    !listItem.wip ? (
                        <li>{listItem.name}</li>
                    ) : (
                        <li class={classes.Wip}>
                            {listItem.name}
                            <span
                                role="img"
                                title="Work in progress"
                                aria-label="Work in progress"
                            >
                                ⚠️
                            </span>
                        </li>
                    )
                )}
            </ul>
        </div>
    </div>
);

export default Header;
