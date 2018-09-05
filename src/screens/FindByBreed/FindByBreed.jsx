import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import axios from 'axios';
import styles from './FindByBreed.module.scss';
import ChooseBreed from '../../common/components/ChooseBreed/ChooseBreed'
import Button from '../../common/components/Button/Button';
import { addImgLinkToLocalStorage } from '../../common/utils/localStorage'

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
      <div>
        <section className={styles.wrapper}>
          <Logo hasText={false} logoClassName={styles.logo} />
          <Heading text={'FIND BY BREED'} />
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
                  text={'Add'}
                  buttonClassName={styles.button}
                  onButtonClick={() => addImgLinkToLocalStorage(link)}
                />
              </div>
            ))
          }
        </section>
      </div>
    )
  }
}

export default FindByBreed