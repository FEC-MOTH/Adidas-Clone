import React from 'react'

const MegaMenuSubMenuColumnFooter = (props) => (
  <div className="mega-menu-sub-menu-col">
    <ul>
      {props.footerItems.map((thirdLevelCategory, i) => {
        if (typeof thirdLevelCategory === 'string') {
          return <li key={i}><a href="#">{thirdLevelCategory}</a></li>;
        } else if (thirdLevelCategory !== null && thirdLevelCategory.hasOwnProperty("name")) {
          return <li className="emphasized" key={i} ><a href="#">{thirdLevelCategory.name}</a></li>;
        } else if (thirdLevelCategory !== null && thirdLevelCategory.hasOwnProperty("horizontalSeparator")) {
          if (thirdLevelCategory.horizontalSeparator === "small") {
            return <div className="horizontal-separator" key={i}></div>
          } else if (thirdLevelCategory.horizontalSeparator === "smallLessMargin") {
            return <div className="horizontal-separator-less-margin" key={i}></div>
          } else if (thirdLevelCategory.horizontalSeparator === "large") {
            return <div className="horizontal-separator-large" key={i}></div>
          }
        }
      })}
    </ul>
  </div>
)

module.exports = MegaMenuSubMenuColumnFooter;