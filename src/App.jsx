import React, { Component } from 'react';
import sassStyles from './App.module.scss';
import Navigation from './common/components/Navigation/Navigation'
import Start from './screens/Start/Start'
import FindByBreed from './screens/FindByBreed/FindByBreed'
import RandomImage from './screens/RandomImage/RandomImage'
import MyImages from './screens/MyImages/MyImages'
import { getImagesFromLocalStorage } from "./common/utils/localStorage";
import { addImgLinkToLocalStorage } from "./common/utils/localStorage";
import { deleteImageFromLocalStorage} from "./common/utils/localStorage";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.getComponentBasingOnId = this.getComponentBasingOnId.bind(this);
    this.addImage = this.addImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.state = {
      listOfImages: [],
      clickedLinkId: 'start'
    };
    this.links = [
      { id: 'start', link: 'Start', component: <Start />},
      { id: 'find-by-breed', link: 'Find by breed', component: <FindByBreed onAddClick={this.addImage} />},
      { id: 'random-img', link: 'Random image', component: <RandomImage onAddClick={this.addImage} />},
      { id: 'my-images', link: 'My images', component: <MyImages onDeleteClick={this.deleteImage}
                                                                 appState={this.state.listOfImages}/>}
    ];
  }

  componentDidMount() {
    this.setState({ listOfImages: getImagesFromLocalStorage() })
    console.log(this.state.listOfImages)
  }

  getComponentBasingOnId (currentId = '', links = []) {
    const currentLinkObj = links.find(elemObj => elemObj.id === currentId);
    return currentLinkObj.component;
  }

  addImage(newImage) {
    addImgLinkToLocalStorage(newImage);
    this.setState({ listOfImages: getImagesFromLocalStorage() })
    console.log(this.state.listOfImages)
  }

  deleteImage(image) {
    deleteImageFromLocalStorage(image);
    this.setState({ listOfImages: getImagesFromLocalStorage() })
  }

  handleLinkClick(id) {
    this.setState({ clickedLinkId: id });
  }

  render() {

    return (
      <div className="App">
        <Navigation
          links={this.links}
          onLinkClick={this.handleLinkClick}
          currentLinkId={this.state.clickedLinkId}
        />
        <div>
          {
            this.getComponentBasingOnId(this.state.clickedLinkId, this.links)
          }
        </div>

      </div>

    );
  }
}

export default App;
