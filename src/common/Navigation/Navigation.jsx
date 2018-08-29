import React, { Component } from 'react';
import styles from './Navigation.module.scss'
import Logo from '../../common/components/Logo/Logo';

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className={styles.navigation}>
        <Logo hasText={true} logoClassName={styles.logo}/>
        <ul>
          <li><a href={'../../screens/Start/Start.jsx'}>Start</a></li>
          <li><a href={'../../screens/FindByBreed/FindByBreed.jsx'}>Find by breed</a></li>
          <li><a href={'../../screens/Start/Start.jsx'}>Random image</a></li>
          <li><a href={'../../screens/Start/Start.jsx'}>My images</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation