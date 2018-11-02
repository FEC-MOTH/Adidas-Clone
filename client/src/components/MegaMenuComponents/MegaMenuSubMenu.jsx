import React from 'react';
import MegaMenuSubMenuColumn from '../MegaMenuComponents/MegaMenuSubMenuColumn';
import MegaMenuSubMenuColumnFooter from '../MegaMenuComponents/MegaMenuSubMenuColumnFooter'
class MegaMenuSubMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.megaMenuTopLevelCategory.hasOwnProperty("hasBottomLine")) {
      return (
        <div className="mega-menu-sub-menu has-bottom-line">
          {this.props.megaMenuTopLevelCategory.Categories.map((megaMenuSecondLevelCategory, i) => (
            <div class="bottom-line">
              <MegaMenuSubMenuColumn megaMenuSecondLevelCategory={megaMenuSecondLevelCategory} key={i} />
              <MegaMenuSubMenuColumnFooter footerItems={this.props.megaMenuTopLevelCategory.footerCategories[i]} key={i} />
            </div>
          )
          )}
        </ div>
      )
    } else {
      return (
        <div className="mega-menu-sub-menu">
          {this.props.megaMenuTopLevelCategory.Categories.map((megaMenuSecondLevelCategory, i) => {
            return <MegaMenuSubMenuColumn megaMenuSecondLevelCategory={megaMenuSecondLevelCategory} key={i} />
          }
          )}
        </ div>
      )
    }
  }
}

module.exports = MegaMenuSubMenu;