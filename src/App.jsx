import React, { Component } from 'react';
import sassStyles from './App.module.scss';
import RandomImage from './screens/RandomImage/RandomImage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomImage />
      </div>
    );
  }
}

export default App;
