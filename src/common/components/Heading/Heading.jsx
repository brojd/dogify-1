import React, { Component } from 'react';
import styles from './Heading.module.scss';
import Logo from '../Logo/Logo';
import paw from '../../images/paw.png'

class Heading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className={styles.wrapper}>
        <h1 className={styles.heading}>
          {this.props.text}
        </h1>
        <div className={styles.logo}>
          <img src={paw} className={styles['logo-img']}/>
      </div>
      </section>
    )

  }
}

export default Heading;