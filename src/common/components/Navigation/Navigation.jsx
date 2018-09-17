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
        <ul className={styles.menu}>
          {
            this.props.links.map((linkElem) => (
              <li
                key={linkElem.id}
                className={linkElem.id === this.props.currentLinkId ? styles['active-item'] : styles.item}
                onClick={() => this.props.onLinkClick(linkElem.id)}
              >
                {linkElem.link}
                <div className={linkElem.id === 'my-images' ? styles['img-no-label'] : styles.invisible}>
                  {this.props.listOfImages.length}
                </div>
              </li>
            ))
          }
        </ul>
      </nav>
    )
  }
}

export default Navigation
