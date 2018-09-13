import React, { Component } from 'react';
import Heading from './../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import styles from './Start.module.scss';
import welcomeDog from '../../common/images/welcome-dog.jpg'

class Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className={styles.wrapper}>
          <Heading text={'Woof Woof Welcome'}/>
          <p className={styles['welcome-note']}>
            Ready to dig into the world full of dogs?
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