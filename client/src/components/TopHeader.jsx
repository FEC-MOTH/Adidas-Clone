import React from 'react';
import styles from '../css/TopHeader.css'

const TopHeader = (props) => {
  return (
    <div className="glass-header-top-desktop">
      <a> Help </a>
      <div className="menu-spacer"></div>
      <a> Order Tracking and Returns </a>
      <em>
        <a className="empasized"> Newsletter Signup </a>
      </em>
      <a> Login </a>
    </div>
  )
}

module.exports = TopHeader;