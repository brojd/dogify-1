import React, { Component } from 'react';
import styles from './Pagination.module.scss';

const generateNullOrDots = condition => condition ? null : '...';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.nbOfPages = Math.ceil(this.props.totalNbOfItems / this.props.nbOfItemsToShow);
    this.pages = [...Array(this.nbOfPages).keys()].map(elem => elem + 1);
    this.state = {
      indexOfActivePage: 0
    };
  }

  handlePageClick(page) {
    const leftBoundary = (page - 1) * this.props.nbOfItemsToShow;
    const rightBoundary = leftBoundary + this.props.nbOfItemsToShow;
    const newBoundaries = [leftBoundary, rightBoundary];
    this.props.onPageClick(newBoundaries);
    this.setState({ indexOfActivePage: page - 1 });
  }

  render() {
    const shouldShowPagination = this.props.nbOfItemsToShow < this.props.totalNbOfItems;
    const showLeftArrow = this.state.indexOfActivePage !== 0;
    const showRightArrow = this.state.indexOfActivePage + 1 < this.nbOfPages;
    
    return (
      shouldShowPagination && (
        <div>
          <button
            key={1}
            onClick={() => this.handlePageClick(1)}
          >
            {'<<'}
          </button>
          {
            showLeftArrow &&
            <button onClick={() => this.handlePageClick(this.state.indexOfActivePage)}>
              {'<'}
            </button>
          }
          {
            this.pages.map((page, index) => (
              index > this.state.indexOfActivePage + 1 || index < this.state.indexOfActivePage - 1
                ? <span key={page}>{generateNullOrDots(true)}</span>
                : (
                  <button
                    key={page}
                    className={this.state.indexOfActivePage === index ? styles.active : ''}
                    onClick={() => this.handlePageClick(page)}
                  >
                    {page}
                  </button>
                )
            ))
          }
          {
            showRightArrow &&
            <button onClick={() => this.handlePageClick(this.state.indexOfActivePage + 2)}>
              {'>'}
            </button>
          }
          <button
            key={this.nbOfPages}
            onClick={() => this.handlePageClick(this.nbOfPages)}
          >
            {'>>'}
          </button>
        </div>
      )
    )
  }
}

export default Pagination;
