import React from 'react';
import styles from '../css/BottomHeader.css'
import { megaMenuAssets } from '../assets/megaMenuData';
import MegaMenu from '../components/MegaMenuComponents/MegaMenu';
import Search from '../components/SearchComponents/Search';
import EmptyBagIcon from '../components/EmptyBagIcon';

const BottomHeader = (props) => (
  <div className="glass-header-bottom-desktop">
    <img id="logo" src="https://s3-us-west-1.amazonaws.com/shoedidas-static/assets/img/shoedidas_white_5.svg"></img>
    {/* <ShoedidasLogo id="logo" /> */}
    <ul className="menu-main">
      <MegaMenu megaMenuAssets={megaMenuAssets} />
      <ul className="search-menu">
        <Search />
        <EmptyBagIcon />
      </ul>
    </ul >
  </div >
)

module.exports = BottomHeader;