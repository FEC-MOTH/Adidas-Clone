import React from 'react';
import MegaMenuSubMenu from '../MegaMenuComponents/MegaMenuSubMenu';

const MegaMenu = (props) => (
  <li className="megaMenuTopLevelCategories">
    {props.megaMenuAssets.map((megaMenuTopLevelCategory, i) => {
      if (megaMenuTopLevelCategory === null) {
        return <li className="vertical-separator" key={i}></li>
      } else if (megaMenuTopLevelCategory.isActive === true) {
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