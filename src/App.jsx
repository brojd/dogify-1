import React, { Component } from 'react';
import sassStyles from './App.module.scss';
import MyImages from './screens/MyImages/MyImages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyImages />
      </div>
    );
  }
}

export default App;
