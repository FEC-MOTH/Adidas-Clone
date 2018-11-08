import React from 'react'
import styles from '../../css/BottomHeader.css';

const MegaMenuSubMenuColumnFooter = (props) => (
  <div className={styles.megaMenuSubMenuCol} >
    <ul>
      {props.footerItems.map((thirdLevelCategory, i) => {
        if (typeof thirdLevelCategory === 'string') {
          return <li key={i}><a href="#">{thirdLevelCategory}</a></li>;
        } else if (thirdLevelCategory !== null && thirdLevelCategory.hasOwnProperty("name")) {
          return <li className={styles.emphasized} key={i} ><a href="#">{thirdLevelCategory.name}</a></li>;
        } else if (thirdLevelCategory !== null && thirdLevelCategory.hasOwnProperty("horizontalSeparator")) {
          if (thirdLevelCategory.horizontalSeparator === "small") {
            return <div className={styles.horizontalSeparator} key={i}></div>
          } else if (thirdLevelCategory.horizontalSeparator === "smallLessMargin") {
            return <div className={styles.horizontalSeparatorLessMargin} key={i}></div>
          } else if (thirdLevelCategory.horizontalSeparator === "large") {
            return <div className={styles.horizontalSeparatorLarge} key={i}></div>
          }
        }
      })}
    </ul>
  </div >
)

module.exports = MegaMenuSubMenuColumnFooter;