import React from 'react';
import MegaMenuSubMenuColumn from '../MegaMenuComponents/MegaMenuSubMenuColumn';

class MegaMenuSubMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.megaMenuTopLevelCategory.hasOwnProperty("hasBottomLine")) {
      this.megaMenuSubmenuClass = "mega-menu-sub-menu bottom-line";
    } else {
      this.megaMenuSubmenuClass = "mega-menu-sub-menu";
    }

    return (
      <div className={this.megaMenuSubmenuClass}>
        {this.props.megaMenuTopLevelCategory.Categories.map((megaMenuSecondLevelCategory, i) => {
          return <MegaMenuSubMenuColumn megaMenuSecondLevelCategory={megaMenuSecondLevelCategory} key={i} />
        }
        )}
      </ div>
    )
  }
}

module.exports = MegaMenuSubMenu;