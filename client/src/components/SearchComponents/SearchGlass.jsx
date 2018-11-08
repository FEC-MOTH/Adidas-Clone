import React from 'react'
import styles from '../../css/Search.css';

const SearchGlass = props => (
  <svg className={styles.searchGlass} viewBox="0 0 20 24" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <circle cx={8} cy={10} r={6} />
      <path d="M13 15l5 5" />
    </g>
  </svg>
)

module.exports = SearchGlass;