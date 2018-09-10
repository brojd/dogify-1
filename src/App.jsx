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
  }

  componentDidMount() {
    this.setState({ listOfImages: getImagesFromLocalStorage() })

  }

  getComponentBasingOnId (currentId = '', links = []) {
    const currentLinkObj = links.find(elemObj => elemObj.id === currentId);
    return currentLinkObj.component;
  }

  addImage(newImage) {
    this.setState({ listOfImages: addImgLinkToLocalStorage(newImage) })
  }

  deleteImage(image) {
    this.setState({ listOfImages: deleteImageFromLocalStorage(image) })
  }

  handleLinkClick(id) {
    this.setState({ clickedLinkId: id });
  }

  render() {

    const links = [
      { id: 'start', link: 'Start', component: <Start />},
      { id: 'find-by-breed', link: 'Find by breed', component: <FindByBreed onAddClick={this.addImage} />},
      { id: 'random-img', link: 'Random image', component: <RandomImage onAddClick={this.addImage} />},
      { id: 'my-images', link: 'My images', component: <MyImages onDeleteClick={this.deleteImage}
                                                                 listOfImages={this.state.listOfImages}/>}
    ];

    return (
      <div className="App">
        <Navigation
          links={links}
          onLinkClick={this.handleLinkClick}
          currentLinkId={this.state.clickedLinkId}
        />
        <div>
          {
            this.getComponentBasingOnId(this.state.clickedLinkId, links)
          }
        </div>

      </div>

    );
  }
}

export default App;
