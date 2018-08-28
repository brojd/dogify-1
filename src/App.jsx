import React, { Component } from 'react';
import sassStyles from './App.module.scss';
import FindByBreed from './screens/FindByBreed/FindByBreed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FindByBreed />
      </div>
    );
  }
}

export default App;
