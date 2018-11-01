import React from 'react';
import Pluralize from 'Pluralize';
import RatingStar from './StarRating';
import EmptyStarRating from './EmptyStarRating';

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
        <span className="star-rating">
          {
            [...Array(5)].map((e, i) => {
              if (i <= props.searchResult.rating) {
                return <RatingStar key={i} />
              } else {
                return <EmptyStarRating key={i} />
              }
            })
          }
        </span>
        <span className="num-reviews">{" " + props.searchResult.num_ratings}</span>
      </div>
    </div>
    <img src={props.searchResult.imageUrl}></img>
  </li>
)

module.exports = SearchResultsListEntry;