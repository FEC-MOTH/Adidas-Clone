import React from 'react';

const SearchResultsListEntry = (props) => (
  <li>
    <div className="product-information">
      <span className="product-subtitle"> {props.searchResult.category} </span>
      <span className="product-name"> {props.searchResult.name} </span>
      <div className="price-container">
        <span className="sale-price">Sale Price: {props.searchResult.price}</span>
        <span className="gl-price-crossed">Reg Price: {props.searchResult.salePrice}</span>
      </div>
      <div className="ratings-summary">
        <span className="star-rating">Star Rating: {props.searchResult.rating}</span>
        <span className="num-reviews">Num Reviews: {props.searchResult.num_ratings}</span>
      </div>
    </div>
    <img src={props.searchResult.imageUrl}></img>
  </li>
)

module.exports = SearchResultsListEntry;