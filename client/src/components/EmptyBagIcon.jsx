import React from 'react'
import styles from '../css/Search.css';

const EmptyBagIcon = props => (
  <li id="bagIconWrapper" className={styles.bagIconWrapper}>
    <svg className={styles.emptyBagIcon} viewBox="0 0 16 24" {...props}>
      <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2}>
        <path d="M1 7h14v14H1z" />
        <path d="M11 10V3H5v7" />
      </g>
    </svg>
    <div className={styles.bagMenu}>
      Your Bag is Empty!
    </div>
  </li >
)

module.exports = EmptyBagIcon;
