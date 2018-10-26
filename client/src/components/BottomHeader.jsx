import React from 'react';
import styles from '../css/BottomHeader.css'

const BottomHeader = (props) => {
  return (
    <div classNameName="glass-header-bottom-desktop">
      <ul className="menu-main">
        <li><a href="#">Men</a>
        <div className="menu-sub">
        <li>
          <h3 className="menu-category"> FEATURED </h3>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Bestsellers</a></li>
            <li><a href="#">Release Dates</a></li>
            <li className="horizontal-separator"></li>
          </ul>
         </li>
        </div>
      </li>
      <li><a href="#">Women</a></li>
    <li><a href="#">Kids</a></li >
      <div className="menu-separator"> </div>
      <li><a href="#">Sports</a></li >
        <li><a href="#">Brands</a></li >
          <div className="menu-separator"> </div>
          <li><a href="#">Customize</a></li >
    </ul >
    </div >
  )
}

module.exports = BottomHeader;