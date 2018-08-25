import React, { Component } from 'react';
import sassStyles from './App.module.scss';
import Start from './screens/Start/Start'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Start />
      </div>
    );
  }
}

export default App;
