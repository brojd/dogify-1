import React, { Component } from 'react';
import Button from '../Button/Button'

class LocalStorageInteractions extends Component {
  constructor(props) {
    super(props);
    this.addImgLinkToLocalStorage = this.addImgLinkToLocalStorage.bind(this);
  }

  addImgLinkToLocalStorage(imgLink){
    console.log(imgLink);
  }

  render () {
    return (
      <Button addImgLinkToLocalStorage={this.addImgLinkToLocalStorage}/>
    )
  }
}

export default LocalStorageInteractions
