import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import styles from "../MyImages/MyImages.module.scss";
import Button from "../../common/components/Button/Button"

class MyImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfImages: []
    }
  }

  componentDidMount() {
    this.setState({ listOfImages: this.props.appState });
    console.log(this.state.listOfImages)
  }

  render() {
    return (
      <div>
        <section className={styles.wrapper}>
          <Logo
            hasText={false}
            logoClassName={styles.logo}
          />
          <Heading text={'MY IMAGES'} />
          {
            this.state.listOfImages.map(imageElem =>(
              <div className={styles['dog-element']}>
                <img
                  src={imageElem.link}
                  alt={'dog-image'}
                  key={imageElem.link}
                  className={styles['dog-img']}
                />
                <Button
                  text={'Delete'}
                  buttonClassName={styles.button}
                  onButtonClick={() => this.props.onDeleteClick(imageElem)}
                />
              </div>
            ))
          }
        </section>
      </div>
    )
  }
}

export default MyImages