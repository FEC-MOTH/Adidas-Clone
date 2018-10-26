import React from 'react';
import styles from '../css/BottomHeader.css'
import { menMainMenuData } from '../assets/megaMenuData';

const BottomHeader = (props) => {
  return (
    <div classNameName="glass-header-bottom-desktop">
      <ul className="menu-main">
        <li><a href="#">Men</a>
          <div className="menu-sub">

            <div className="menu-sub-col">
              <h3 className="menu-category"> FEATURED </h3>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Bestsellers</a></li>
                <li><a href="#">Release Dates</a></li>
                <li className="horizontal-separator"></li>
                <li><a href="#">P.O.D.System</a></li>
                <li><a href="#">Ultraboost</a></li>
                <li><a href="#">Ultraboost A16+</a></li>
                <li><a href="#">NMD</a></li>
                <li><a href="#">Fall Collection</a></li>
                <li className="horizontal-separator"></li>
                <li className="emphasized"><a href="#">SALE</a></li>
              </ul>
            </div>

            <div className="menu-sub-col">
              <h3 className="menu-category"> SHOES </h3>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Bestsellers</a></li>
                <li><a href="#">Release Dates</a></li>
                <li className="horizontal-separator"></li>
              </ul>
            </div>

            <div className="menu-sub-col">
              <h3 className="menu-category"> CLOTHING </h3>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Bestsellers</a></li>
                <li><a href="#">Release Dates</a></li>
                <li className="horizontal-separator"></li>
              </ul>
            </div>

             <div className="menu-sub-col">
              <h3 className="menu-category"> ACCESSORIES </h3>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Bestsellers</a></li>
                <li><a href="#">Release Dates</a></li>
                <li className="horizontal-separator"></li>
              </ul>
            </div>

             <div className="menu-sub-col">
              <h3 className="menu-category"> SPORTS </h3>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Bestsellers</a></li>
                <li><a href="#">Release Dates</a></li>
                <li className="horizontal-separator"></li>
              </ul>
            </div>

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