import React from 'react';

const SubMenu = (props) => {
    return (
    <div className="menu-sub">
        {props.mainMenuAsset.Categories.map((category) => {
            const jsx = (<div className="menu-sub-col">
                <h3 className="menu-category"> {category.name} </h3>
                <ul>
                    {category.subCategories.map((subCategory) => {
                        if (typeof subCategory === 'string') {
                            return <li><a href="#">{subCategory}</a></li>;
                        } else if (typeof subCategory === 'object' && subCategory !== null) {
                            return <li className="emphasized" ><a href="#">{subCategory.name}</a></li>;
                        } else if (subCategory === null) {
                            return <li className="horizontal-separator"></li>;
                        }
                    })}
                </ul>
            </div>
            )
            return jsx;
        }
        )}
    </div>
    )
}

module.exports = SubMenu;