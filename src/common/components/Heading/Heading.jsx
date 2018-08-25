import React, { Component } from 'react';
import styles from './Heading.module.scss';

class Heading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1 className={styles.heading}>
        {this.props.text}
      </h1>
    )

  }
}

export default Heading;