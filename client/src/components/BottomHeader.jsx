import React from 'react';
import styles from '../css/BottomHeader.css'
import { megaMenuAssets } from '../assets/megaMenuData';
import MegaMenu from '../components/MegaMenuComponents/MegaMenu';
import Search from '../components/SearchComponents/Search';
import EmptyBagIcon from '../components/EmptyBagIcon';

const BottomHeader = (props) => (
  <div className={styles.glassHeaderBottomDesktop}>
    <img className={styles.logo} src={process.env.CDN_ROOT.concat('/assets/img/shoedidas_white_5.svg')} ></img>
    <ul className={styles.menuMain}>
      <MegaMenu megaMenuAssets={megaMenuAssets} />
      <ul className={styles.searchMenu}>
        <Search />
        <EmptyBagIcon />
      </ul>
    </ul >
  </div >
)

module.exports = BottomHeader;