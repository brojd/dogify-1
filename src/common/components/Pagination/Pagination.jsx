import React, { Component } from 'react';
import styles from './Pagination.module.scss';

const generateNullOrDots = condition => condition ? null : '...';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.state = {
      indexOfActivePage: 0
    };
  }
  
  componentWillReceiveProps(newProps) {
    if (this.state.indexOfActivePage >= (newProps.totalNbOfItems / newProps.nbOfItemsToShow)) {
      this.handlePageClick(this.state.indexOfActivePage)
    }
  }

  handlePageClick(page) {
    const leftBoundary = (page - 1) * this.props.nbOfItemsToShow;
    const rightBoundary = leftBoundary + this.props.nbOfItemsToShow;
    const newBoundaries = [leftBoundary, rightBoundary];
    this.props.onPageClick(newBoundaries);
    this.setState({ indexOfActivePage: page - 1 });
  }

  render() {
    const nbOfPages = Math.ceil(this.props.totalNbOfItems / this.props.nbOfItemsToShow);
    const pages = [...Array(nbOfPages).keys()].map(elem => elem + 1);
    const shouldShowPagination = this.props.nbOfItemsToShow < this.props.totalNbOfItems;
    const showLeftArrow = this.state.indexOfActivePage !== 0;
    const showRightArrow = this.state.indexOfActivePage + 1 < nbOfPages;
    
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
            pages.map((page, index) => (
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
            key={nbOfPages}
            onClick={() => this.handlePageClick(nbOfPages)}
          >
            {'>>'}
          </button>
        </div>
      )
    )
  }
}

export default Pagination;
