import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button/Button'

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
        
        >
          <option>Choose Breed</option>
          {
            this.state.listOfBreeds.map(Breed => (
              <option
                value={Breed}
                key={Breed}
              >
                {Breed}
              </option>
            ))
          }
        </select>
        <Button text={'Go'} onButtonClick={() => this.props.onGoClick(this.state.currentBreed)}/>
      </div>
    )
  }
}

export default ChooseBreed;