import React, {Component} from 'react';
import Heading from '../../common/components/Heading/Heading';
import axios from 'axios';
import styles from './FindByBreed.module.scss';
import ChooseBreed from '../../common/components/ChooseBreed/ChooseBreed'

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
      <section className={styles.wrapper}>
        <Heading text={'Find By Breed'} />
        <ChooseBreed onGoClick={this.onGoClick}/>
        {
          this.state.listOfLinks.map(link => (
            <img
              src={link}
              alt={'dog-image'}
              key={link}
              className={styles['dog-img']}
            />
          ))
        }
      </section>
    )
  }
}

export default FindByBreed