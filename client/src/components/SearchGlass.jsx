import React from 'react'

const SearchGlass = props => (
  <svg className="search-glass" viewBox="0 0 20 24" {...props}>
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