import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import styles from "../MyImages/MyImages.module.scss";
import Button from "../../common/components/Button/Button"
import { deleteImageFromLocalStorage } from "../../common/utils/localStorage";

class MyImages extends Component {
  constructor(props) {
    super(props);
    this.deleteImage = this.deleteImage.bind(this);
    this.state = {
      listOfImages: []
    }
  }

  componentDidMount() {
    this.setState({
      listOfImages: JSON.parse(localStorage.getItem('images'))
    })
  }

  deleteImage(image) {
    deleteImageFromLocalStorage(image);
    this.setState({
      listOfImages: JSON.parse(localStorage.getItem('images'))
    })
  }

  render() {
    return (
      <div>
        <section className={styles.wrapper}>
          <Logo hasText={false} logoClassName={styles.logo} />
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
                  onButtonClick={() => this.deleteImage(imageElem)}
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