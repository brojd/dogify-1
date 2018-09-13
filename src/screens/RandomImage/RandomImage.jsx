import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import axios from 'axios';
import styles from './RandomImage.module.scss'
import ChooseBreed from '../../common/components/ChooseBreed/ChooseBreed'
import Button from '../../common/components/Button/Button'
import { getImageFromLocalStorage } from "../../common/utils/localStorage";

class RandomImage extends Component {
  constructor(props) {
    super(props);
    this.onGoClick = this.onGoClick.bind(this);
    this.state = {
      randomImg: ''
    };
    console.log(this.state.randomImg)
  }

  onGoClick(breed) {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => {
        this.setState({
          randomImg: res.data.message
        })
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Heading text={'Wanna see some dogs?'} />
        <ChooseBreed onGoClick={this.onGoClick}/>
        <div className={this.state.randomImg === '' ? styles['no-display'] : styles['dog-element']}>
          <img
            src={this.state.randomImg}
            alt={'dog-image'}
            className={styles['dog-img']}
          />
          <Button
            text={getImageFromLocalStorage(this.state.randomImg) ? 'Dogified' : 'Add Me'}
            onButtonClick={() => this.props.onAddClick(this.state.randomImg)}
            buttonClassName={styles['add-button']}
          />
        </div>
      </div>
    )
  }
}

export default RandomImage