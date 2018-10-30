import React from 'react';
import Pluralize from 'Pluralize';
import StarRating from './StarRating';

const SearchResultsListEntry = (props) => (
  <li>
    <div className="product-information">
      <span className="product-subtitle">
        {props.searchResult.gender + "'s " + Pluralize(props.searchResult.category)}
      </span>
      <span className="product-name"> {props.searchResult.name} </span>
      {props.searchResult.salePrice !== null &&
        <div className="price-container">
          <span className="sale-price">${props.searchResult.price + " "}</span>
          <span className="gl-price-crossed">${props.searchResult.salePrice}</span>
        </div>
      }
      {props.searchResult.salePrice === null &&
        <div className="price-container">
          <span className="gl-price">${props.searchResult.price}</span>
        </div>
      }
      <div className="ratings-summary">
        <span className="star-rating">Star Rating: {props.searchResult.rating}</span>
        <StarRating />
        {/* <svg className="gl-star-rating__star" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><linearGradient id="26bb0afa-7596-40d1-8031-3f94881a33b5"><stop offset="0%" stop-opacity="1" style={"stop-color: currentcolor;"}></stop><stop offset="100%" stop-opacity="1" style={"stop-color: currentcolor;"}></stop><stop offset="100%" stop-opacity="0" style={"stop-color: currentcolor;"}></stop><stop offset="100%" stop-opacity="0" style={"stop-color: currentcolor;"}></stop></linearGradient><path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path><path fill="url(#26bb0afa-7596-40d1-8031-3f94881a33b5)" stroke="0" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path></svg> */}
        <span className="num-reviews">Num Reviews: {props.searchResult.num_ratings}</span>
      </div>
    </div>
    <img src={props.searchResult.imageUrl}></img>
  </li>
)

module.exports = SearchResultsListEntry;