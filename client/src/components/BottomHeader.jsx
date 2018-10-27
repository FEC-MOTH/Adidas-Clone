import React from 'react';
import styles from '../css/BottomHeader.css'
import { megaMenuAssets } from '../assets/megaMenuData';
import MegaMenu from '../components/MegaMenuComponents/MegaMenu';

const BottomHeader = (props) => (
  <div className="glass-header-bottom-desktop">
    <ul className="menu-main">
      <MegaMenu megaMenuAssets={megaMenuAssets} />
    </ul >
  </div >
)

module.exports = BottomHeader;