import React, { Component } from 'react';
import sassStyles from './App.module.scss';
import Navigation from './common/components/Navigation/Navigation'
import Start from './screens/Start/Start'
import FindByBreed from './screens/FindByBreed/FindByBreed'
import RandomImage from './screens/RandomImage/RandomImage'
import MyImages from './screens/MyImages/MyImages'

const links = [
  { id: 'start', link: 'Start', component: <Start />},
  { id: 'find-by-breed', link: 'Find by breed', component: <FindByBreed />},
  { id: 'random-img', link: 'Random image', component: <RandomImage />},
  { id: 'my-images', link: 'My images', component: <MyImages />}
];

const getComponentBasingOnId = (currentId = '', links = []) => {
  const currentLinkObj = links.find(elemObj => elemObj.id === currentId);
  return currentLinkObj.component;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.state = {
      clickedLinkId: links[0].id
    }
  }

  handleLinkClick(id) {
    this.setState({ clickedLinkId: id });
  }

  render() {
    return (
      <div className="App">
        <Navigation
          links={links}
          onLinkClick={this.handleLinkClick}
          currentLinkIndex={this.state.clickedLinkId}
        />
        <div>
          {
            getComponentBasingOnId(this.state.clickedLinkId, links)
          }
        </div>
      </div>
    );
  }
}

export default App;
