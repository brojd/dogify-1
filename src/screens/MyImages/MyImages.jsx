import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import styles from "../MyImages/MyImages.module.scss";


class MyImages extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <section className={styles.wrapper}>
          <Logo hasText={false} logoClassName={styles.logo} />
          <Heading text={'MY IMAGES'} />
        </section>
      </div>
    )
  }
}

export default MyImages