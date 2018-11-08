import React from 'react';
import styles from '../../css/BottomHeader.css';

class MegaMenuSubMenuColumnHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { megaMenuSecondLevelCategory } = this.props;

    return (
      <li>
        {megaMenuSecondLevelCategory.columnHeaderImage === null &&
          <h3 className={styles.megaMenuSecondLevelCategory}> {megaMenuSecondLevelCategory.name} </h3>
        }

        {megaMenuSecondLevelCategory.columnHeaderImage !== null &&
          <img src={megaMenuSecondLevelCategory.columnHeaderImage} />
        }

        {megaMenuSecondLevelCategory.mainColumnImage !== null &&
          <img src={megaMenuSecondLevelCategory.mainColumnImage} />
        }
      </li>
    )
  }
}

module.exports = MegaMenuSubMenuColumnHeader;