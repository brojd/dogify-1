import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import axios from 'axios';
import styles from './FindByBreed.module.scss';
import ChooseBreed from '../../common/components/ChooseBreed/ChooseBreed'
import Button from '../../common/components/Button/Button';
import { getImageFromLocalStorage } from '../../common/utils/localStorage';
import { buttonsTexts} from "../../common/config/dict";

class FindByBreed extends Component {
  constructor(props) {
    super(props);
    this.onGoClick = this.onGoClick.bind(this);
    this.state = {
      listOfLinks: []
    };
  }

  onGoClick(breed) {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        const firstThirtyDogs = res.data.message.slice(0, 30);
        this.setState({
          listOfLinks: firstThirtyDogs
        })
      })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Heading text={'Find your breed'} />
        <ChooseBreed onGoClick={this.onGoClick}/>
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
                onButtonClick={() => this.props.onAddClick(link)}
              />
            </div>
          ))
        }
      </div>
    )
  }
}

export default FindByBreed