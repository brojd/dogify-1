import React, { Component } from 'react';
import Heading from './../../common/components/Heading/Heading';
import styles from './Start.module.scss';
import welcomeDog from '../../common/images/welcome-dog.jpg'
import { startTexts, headingTexts } from '../../common/config/dict'

class Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className={styles.wrapper}>
          <Heading text={headingTexts.start}/>
          <p className={styles['welcome-note']}>
            {startTexts.welcomeNote}
            <img
              src={welcomeDog}
              className={styles.dog}
            />
          </p>
        </div>
    )
  }

}

export default Start