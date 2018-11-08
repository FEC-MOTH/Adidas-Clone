import React from 'react';
import MegaMenuSubMenuColumn from '../MegaMenuComponents/MegaMenuSubMenuColumn';
import MegaMenuSubMenuColumnFooter from '../MegaMenuComponents/MegaMenuSubMenuColumnFooter'
import styles from '../../css/BottomHeader.css';
import cx from 'classnames';

class MegaMenuSubMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.megaMenuTopLevelCategory.hasOwnProperty("hasBottomLine")) {
      return (
        <div className={styles.megaMenuSubMenuWrapper} >
          <div className={cx(styles.megaMenuSubMenu, styles.hasBottomLine)}>
            {this.props.megaMenuTopLevelCategory.Categories.map((megaMenuSecondLevelCategory, i) => (
              <div className={styles.bottomLine} key={i}>
                <MegaMenuSubMenuColumn megaMenuSecondLevelCategory={megaMenuSecondLevelCategory} />
                <MegaMenuSubMenuColumnFooter footerItems={this.props.megaMenuTopLevelCategory.footerCategories[i]} />
              </div>
            )
            )}
          </ div>
        </div >
      )
    } else {
      return (
        <div className={styles.megaMenuSubMenuWrapper}>
          <div className={styles.megaMenuSubMenu}>
            {this.props.megaMenuTopLevelCategory.Categories.map((megaMenuSecondLevelCategory, i) => {
              return <MegaMenuSubMenuColumn megaMenuSecondLevelCategory={megaMenuSecondLevelCategory} key={i} />
            }
            )}
          </ div>
        </div>
      )
    }
  }
}

module.exports = MegaMenuSubMenu;