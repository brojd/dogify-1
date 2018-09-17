import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import axios from 'axios';
import styles from './FindByBreed.module.scss';
import ChooseBreed from '../../common/components/ChooseBreed/ChooseBreed'
import Button from '../../common/components/Button/Button';
import { getImageFromLocalStorage } from '../../common/utils/localStorage';
import { buttonsTexts, headingTexts } from "../../common/config/dict";
import Wait from "../../common/components/Wait/Wait";

class FindByBreed extends Component {
  constructor(props) {
    super(props);
    this.onGoClick = this.onGoClick.bind(this);
    this.state = {
      listOfLinks: [],
      isLoading: false
    };
  }

  onGoClick(breed) {
    this.setState({ isLoading: true });
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        const firstThirtyDogs = res.data.message.slice(0, 30);
        this.setState({
          listOfLinks: firstThirtyDogs,
          isLoading: false
        })
      })
  }

  handleAddButtonClick(imgLink) {
    if(!getImageFromLocalStorage(imgLink)) this.props.onAddClick(imgLink)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Heading text={headingTexts.findByBreed} />
        <ChooseBreed onGoClick={this.onGoClick}/>
        <Wait isWaiting={this.state.isLoading}>
          {
            this.state.listOfLinks.map(link => (
              <div className={styles['dog-element']}>
                <img
                  src={link}
                  alt={'dog-image'}
                  key={link}
                  className={styles['dog-img']}
                />
                <Button
                  text={getImageFromLocalStorage(link) ? buttonsTexts.dogifiedButtonText : buttonsTexts.addButtonText}
                  buttonClassName={styles['add-button']}
                  onButtonClick={() => this.handleAddButtonClick(link)}
                />
              </div>
            ))
          }
        </Wait>
      </div>
    )
  }
}

export default FindByBreed
