import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import axios from 'axios';
import styles from './FindByBreed.module.scss';
import ChooseBreed from '../../common/components/ChooseBreed/ChooseBreed'
import Button from '../../common/components/Button/Button';
import { getImageFromLocalStorage } from '../../common/utils/localStorage';
import { buttonsTexts, headingTexts } from "../../common/config/dict";
import Wait from "../../common/components/Wait/Wait";
import Pagination from "../../common/components/Pagination/Pagination";

const NB_OF_ITEMS_TO_SHOW = 5;

class FindByBreed extends Component {
  constructor(props) {
    super(props);
    this.onGoClick = this.onGoClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.state = {
      listOfLinks: [],
      isLoading: false,
      boundaries: [0, NB_OF_ITEMS_TO_SHOW],
      clickedLink: ''
    };
  }

  handlePageClick(newBoundaries) {
    this.setState({ boundaries: newBoundaries });
  }

  onGoClick(breed) {
    this.setState({ isLoading: true });
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        this.setState({
          listOfLinks: res.data.message,
          isLoading: false
        })
      })
  }

  handleAddButtonClick(imgLink) {
    if (!getImageFromLocalStorage(imgLink)) {
      this.props.onAddClick(imgLink);
      this.setState({ clickedLink: imgLink });
      setTimeout(
        () => this.setState({ clickedLink: '' }),
        2000
      )
    }
  }

  render() {
    const imagesToShow = this.state.listOfLinks.slice(this.state.boundaries[0], this.state.boundaries[1])
    
    return (
      <div className={styles.wrapper}>
        <Heading text={headingTexts.findByBreed} />
        <ChooseBreed onGoClick={this.onGoClick}/>
        <Wait isWaiting={this.state.isLoading}>
          <div className={styles['dogs-wrapper']}>
            {
              imagesToShow.map(link => (
                <div
                  key={link}
                  className={styles['dog-element']}
                >
                  <div className={styles['img-wrapper']}>
                    <img
                      src={link}
                      alt={'dog-image'}
                      key={link}
                      className={styles['dog-img']}
                    />
                    <div className={
                      `${link === this.state.clickedLink ? styles['add-img-back--visible'] : styles['add-img-back--hidden']} ${styles['add-img-back']}`
                    }>
                      {
                        link === this.state.clickedLink &&
                        <span className={styles['img-added']}>Image added</span>  
                      }
                    </div>
                  </div>
                  <Button
                    text={getImageFromLocalStorage(link) ? buttonsTexts.dogifiedButtonText : buttonsTexts.addButtonText}
                    buttonClassName={styles['add-button']}
                    onButtonClick={() => this.handleAddButtonClick(link)}
                  />
                </div>
              ))
            }
            <Pagination
              nbOfItemsToShow={NB_OF_ITEMS_TO_SHOW}
              totalNbOfItems={this.state.listOfLinks.length}
              onPageClick={this.handlePageClick}
            />
          </div>
        </Wait>
      </div>
    )
  }
}

export default FindByBreed
