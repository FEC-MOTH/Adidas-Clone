import React from 'react';

class MegaMenuSubMenuColumnHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { megaMenuSecondLevelCategory } = this.props;

        return (
            <li>
                {megaMenuSecondLevelCategory.columnHeaderImage === null &&
                    <h3 className="mega-menu-second-level-category"> {megaMenuSecondLevelCategory.name} </h3>
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