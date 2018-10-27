import React from 'react';
import MegaMenuSubMenu from '../MegaMenuComponents/MegaMenuSubMenu';

const MegaMenu = (props) => (
        <div className="megaMenuTopLevelCategories">
            {props.megaMenuAssets.map((megaMenuTopLevelCategory) => {
                if (megaMenuTopLevelCategory === null) {
                    return <li className="vertical-separator"></li>
                } else {
                    return (
                        <li><a href="#">{megaMenuTopLevelCategory.name}</a>
                            <MegaMenuSubMenu megaMenuTopLevelCategory={megaMenuTopLevelCategory} />
                        </li>
                    )
                }

            })}
        </div>
)

module.exports = MegaMenu;