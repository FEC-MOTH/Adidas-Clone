import React from 'react';
import MegaMenuSubMenuColumnHeader from '../components/MegaMenuSubMenuColumnHeader';

class MegaMenuSubMenuColumn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { megaMenuSecondLevelCategory } = this.props;

        return (
            <div className="mega-menu-sub-menu-col">
                <ul>
                    <MegaMenuSubMenuColumnHeader
                        megaMenuSecondLevelCategory={megaMenuSecondLevelCategory}
                    />
                    {megaMenuSecondLevelCategory.subCategories.map((thirdLevelCategory) => {
                        if (typeof thirdLevelCategory === 'string') {
                            return <li><a href="#">{thirdLevelCategory}</a></li>;
                        } else if (typeof thirdLevelCategory === 'object' && thirdLevelCategory !== null) {
                            return <li className="emphasized" ><a href="#">{thirdLevelCategory.name}</a></li>;
                        } else if (thirdLevelCategory === null) {
                            return <li className="horizontal-separator"></li>;
                        }
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = MegaMenuSubMenuColumn;