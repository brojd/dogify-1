import React, { Component } from 'react';
import styles from './Navigation.module.scss'
import Logo from '../Logo/Logo';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={styles.navigation}>
        <Logo hasText={true} logoClassName={styles.logo}/>
        <ul>
          {
            this.props.links.map((linkElem) => (
                <li
                  key={linkElem.id}
                  className={linkElem.id === this.props.currentLinkId ? styles.activeLink : ''}
                >
                  <button
                    onClick={() => this.props.onLinkClick(linkElem.id)}
                    className={styles.button}
                  >
                    {linkElem.link}
                  </button>
                </li>
            ))
          }
        </ul>
      </nav>
    )
  }
}

export default Navigation