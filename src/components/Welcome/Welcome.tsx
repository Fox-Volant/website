import React from 'react';
import * as styles from './Welcome.module.scss';

export const Welcome = (props) => {
    return (<div className={`p-4 rounded-4 d-flex flex-wrap ${styles.welcome}`}>{props.children}</div>);
      
};
