import React from 'react';
import MegaMenuSubMenuColumn from '../components/MegaMenuSubMenuColumn';

const MegaMenuSubMenu = (props) => (
    <div className="mega-menu-sub-menu">
        {props.megaMenuTopLevelCategory.Categories.map((megaMenuSecondLevelCategory) => {
            return <MegaMenuSubMenuColumn megaMenuSecondLevelCategory={megaMenuSecondLevelCategory} />
        }
        )}
    </div>
)

module.exports = MegaMenuSubMenu;