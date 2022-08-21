import React from 'react';
import * as styles from './TextFrame.module.scss';

export const TextFrame = (props) => {
    return (<div className={`${styles.textframe} ${props.className}`}>{props.children}</div>);      
};
