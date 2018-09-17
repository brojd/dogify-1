import React, { Component } from 'react';
import axios from 'axios';
import Wait from '../../common/components/Wait/Wait';
import Heading from '../../common/components/Heading/Heading';
import styles from './RandomImage.module.scss'
import ChooseBreed from '../../common/components/ChooseBreed/ChooseBreed'
import Button from '../../common/components/Button/Button'
import { getImageFromLocalStorage } from '../../common/utils/localStorage';
import { buttonsTexts, headingTexts } from '../../common/config/dict';

class RandomImage extends Component {
  constructor(props) {
    super(props);
    this.onGoClick = this.onGoClick.bind(this);
    this.state = {
      randomImg: '',
      isLoading: false
    };
  }

  onGoClick(breed) {
    this.setState({ isLoading: true });
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => {
        this.setState({
          randomImg: res.data.message,
          isLoading: false
        })
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Heading text={headingTexts.randomImage} />
        <ChooseBreed onGoClick={this.onGoClick}/>
        <div>
          <Wait isWaiting={this.state.isLoading}>
            <div className={this.state.randomImg === '' ? styles['no-display'] : styles['dog-element']}>
              <img
                src={this.state.randomImg}
                alt={'dog-image'}
                className={styles['dog-img']}
              />
              <Button
                text={getImageFromLocalStorage(this.state.randomImg) ? buttonsTexts.dogifiedButtonText : buttonsTexts.addButtonText}
                onButtonClick={() => this.props.onAddClick(this.state.randomImg)}
                buttonClassName={styles['add-button']}
              />
            </div>
          </Wait>
        </div>
      </div>
    )
  }
}

export default RandomImage
