import React from 'react';
import { loading } from '../../../common/config/dict.js';
import styles from './Wait.module.scss';

function Wait(props) {
  return (
    props.isWaiting
      ? (
        <div className={styles.wrapper}>
          <div className="ui text active loader">{loading}</div>
        </div>
      )
      : props.children
  );
}

export default Wait;
