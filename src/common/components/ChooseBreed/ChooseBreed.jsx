import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button/Button'
import styles from './ChooseBreed.module.scss'

class ChooseBreed extends Component {
  constructor(props) {
    super(props);
    this.onBreedChange = this.onBreedChange.bind(this);
    this.state = {
      listOfBreeds: [],
      currentBreed: ''
    }
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        this.setState({
          listOfBreeds: Object.keys(res.data.message)
        });
      });
  }

  onBreedChange(event) {
    this.setState({
      currentBreed: event.target.value
    })
  }

  render() {
    return (
      <div>
        <select
          onChange={this.onBreedChange}
          value={this.state.currentBreed}
          className={styles.select}
        >
          <option className="item">Choose Breed</option>
          {
            this.state.listOfBreeds.map(Breed => (
              <option
                value={Breed}
                key={Breed}
                className="item"
              >
                {Breed}</option>
            ))
          }
        </select>
        <Button
          text={'DOGify'}
          onButtonClick={() => this.props.onGoClick(this.state.currentBreed)}
          buttonClassName= {styles['dogify-button']}
        />
      </div>
    )
  }
}

export default ChooseBreed;