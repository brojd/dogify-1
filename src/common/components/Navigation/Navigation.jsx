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
        <div className="ui secondary vertical menu">
          {
            this.props.links.map((linkElem) => (
              <a
                key={linkElem.id}
                className={linkElem.id === this.props.currentLinkId ? "active item" : "item"}
                onClick={() => this.props.onLinkClick(linkElem.id)}
              >
                {linkElem.link}
              </a>
            ))
          }
        </div>
      </nav>
    )
  }
}

export default Navigation