import React from 'react'

const RatingStar = props => (
  <svg className="gl-star-rating_star" viewBox="0 0 15 15" {...props}>
    <linearGradient id="a">
      <stop offset="0%" stopColor="currentcolor" />
      <stop offset="100%" stopColor="currentcolor" />
      <stop offset="100%" stopOpacity={0} stopColor="currentcolor" />
      <stop offset="100%" stopOpacity={0} stopColor="currentcolor" />
    </linearGradient>
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M13.277 6.182l-3.58 2.6 1.36 4.21-3.57-2.6-3.58 2.6 1.37-4.21-3.58-2.6h4.42l1.37-4.19 1.37 4.19h4.42z"
    />
    <path
      fill="url(#a)"
      stroke={0}
      d="M13.277 6.182l-3.58 2.6 1.36 4.21-3.57-2.6-3.58 2.6 1.37-4.21-3.58-2.6h4.42l1.37-4.19 1.37 4.19h4.42z"
    />
  </svg>
)

export default RatingStar;