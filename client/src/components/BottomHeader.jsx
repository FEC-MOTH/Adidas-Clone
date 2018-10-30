import React from 'react';
import styles from '../css/BottomHeader.css'
import { megaMenuAssets } from '../assets/megaMenuData';
import MegaMenu from '../components/MegaMenuComponents/MegaMenu';
import Search from '../components/Search';

const BottomHeader = (props) => (
  <div className="glass-header-bottom-desktop">
    <ul className="menu-main">
      <MegaMenu megaMenuAssets={megaMenuAssets} />
      <ul className="search-menu">
        <Search />
      </ul>
    </ul >
  </div >
)

module.exports = BottomHeader;