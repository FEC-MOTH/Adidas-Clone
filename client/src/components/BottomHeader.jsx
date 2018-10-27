import React from 'react';
import styles from '../css/BottomHeader.css'
import { mainMenuAssets } from '../assets/megaMenuData';
import SubMenu from '../components/SubMenu.jsx';

const BottomHeader = (props) => {
  return (
    <div className="glass-header-bottom-desktop">
      <ul className="menu-main">

        {mainMenuAssets.map((mainMenuAsset) => {

          if (mainMenuAsset === null) {
            return <li className="vertical-separator"></li>
          } else {
          return (
          <li><a href="#">{mainMenuAsset.name}</a>
            <SubMenu mainMenuAsset={mainMenuAsset} />
          </li>
          )
        }
        })}
      </ul >
    </div >
  )
}

module.exports = BottomHeader;