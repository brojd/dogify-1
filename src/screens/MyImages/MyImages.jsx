import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import styles from "../MyImages/MyImages.module.scss";
import Button from "../../common/components/Button/Button"
import { buttonsTexts, headingTexts } from "../../common/config/dict";
import Pagination from "../../common/components/Pagination/Pagination";

const NB_OF_ITEMS_TO_SHOW = 5;

class MyImages extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.state = {
      boundaries: [0, NB_OF_ITEMS_TO_SHOW]
    };
  }

  handlePageClick(newBoundaries) {
    this.setState({ boundaries: newBoundaries });
  }

  render() {
    const imagesToShow = this.props.listOfImages.slice(this.state.boundaries[0], this.state.boundaries[1])

    return (
      <div>
        <section className={styles.wrapper}>
          <Heading text={headingTexts.myImages} />
          {
            imagesToShow.map(imageElem => (
              <div className={styles['dog-element']}>
                <img
                  src={imageElem.link}
                  alt={'dog-image'}
                  key={imageElem.link}
                  className={styles['dog-img']}
                />
                <Button
                  text={buttonsTexts.deleteButtonText}
                  buttonClassName={styles['delete-button']}
                  onButtonClick={() => this.props.onDeleteClick(imageElem)}
                />
              </div>
            ))
          }
          <Pagination
            nbOfItemsToShow={NB_OF_ITEMS_TO_SHOW}
            totalNbOfItems={this.props.listOfImages.length}
            onPageClick={this.handlePageClick}
          />
        </section>
      </div>
    )
  }
}

export default MyImages
