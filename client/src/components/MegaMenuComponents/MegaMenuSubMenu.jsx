import React from 'react';
import MegaMenuSubMenuColumn from '../MegaMenuComponents/MegaMenuSubMenuColumn';

const MegaMenuSubMenu = (props) => (
  <div className="mega-menu-sub-menu">
    {props.megaMenuTopLevelCategory.Categories.map((megaMenuSecondLevelCategory, i) => {
      return <MegaMenuSubMenuColumn megaMenuSecondLevelCategory={megaMenuSecondLevelCategory} key={i} />
    }
    )}
  </div>
)

module.exports = MegaMenuSubMenu;