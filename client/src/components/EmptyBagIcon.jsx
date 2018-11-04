import React from 'react'

const EmptyBagIcon = props => (
  <li id="bag-icon-wrapper">
    <svg className="empty-bag-icon" viewBox="0 0 16 24" {...props}>
      <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2}>
        <path d="M1 7h14v14H1z" />
        <path d="M11 10V3H5v7" />
      </g>
    </svg>
    <div className="bag-menu">
      Your Bag is Empty!
    </div>
  </li >
)

module.exports = EmptyBagIcon;
