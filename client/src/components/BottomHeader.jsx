import React from 'react';
import styles from '../css/BottomHeader.css'
import { menMainMenuData } from '../assets/megaMenuData';

const BottomHeader = (props) => {
  return (
    <div className="glass-header-bottom-desktop">
      <ul className="menu-main">
      
        <li><a href="#">Men</a>
          <div className="menu-sub">
            {menMainMenuData.Categories.map((category) => {
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

      </li>

      <li><a href="#">Women</a></li>
      <li><a href="#">Kids</a></li >
      <div className="menu-separator"> </div>
      <li><a href="#">Sports</a></li >
      <li><a href="#">Brands</a></li >
      <div className="menu-separator"> </div>
      <li><a href="#">Customize</a></li >
      </ul >
    </div >
  )
}

module.exports = BottomHeader;