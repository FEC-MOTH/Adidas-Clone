import React from 'react';
import MegaMenuSubMenu from '../MegaMenuComponents/MegaMenuSubMenu';
import styles from '../../css/BottomHeader.css';

const MegaMenu = (props) => (
  <li className={styles.megaMenuTopLevelCategories}>
    {props.megaMenuAssets.map((megaMenuTopLevelCategory, i) => {
      if (!megaMenuTopLevelCategory) {
        return <li className={styles.verticalSeparator} key={i}></li>
      }
      if (megaMenuTopLevelCategory.isActive) {
        return (
          <li key={i}><a href="#">{megaMenuTopLevelCategory.name}</a>
            <MegaMenuSubMenu megaMenuTopLevelCategory={megaMenuTopLevelCategory} />
          </li>
        )
      }
    })}
  </li>
)

module.exports = MegaMenu;