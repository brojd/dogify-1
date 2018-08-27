import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import styles from './RandomImage.module.scss'

class RandomImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Logo hasText={false} logoClassName={styles.logo} />
        <Heading text={'RANDOM IMAGE'} />
      </section>
    )

  }
}

export default RandomImage