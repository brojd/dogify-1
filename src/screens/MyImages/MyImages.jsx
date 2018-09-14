import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import styles from "../MyImages/MyImages.module.scss";
import Button from "../../common/components/Button/Button"
import { buttonsTexts} from "../../common/config/dict";

class MyImages extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <section className={styles.wrapper}>
          <Heading text={'My images'} />
          {
            this.props.listOfImages.map(imageElem => (
              <div className={styles['dog-element']}>
                <img
                  src={imageElem.link}
                  alt={'dog-image'}
                  key={imageElem.link}
                  className={styles['dog-img']}
                />
                <Button
                  text={buttonsTexts.deleteButtonText}
                  buttonClassName={styles['delete-button']}
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