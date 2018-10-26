import React from 'react';
import styles from '../css/header.css'

const Header = (props) => {
  return (
    <div className="header-desktop">
      <div className="glass-header-top-desktop navigation">Here is the glass header
          <a> Help </a>
        <div className="menu-spacer"></div>
        <a> Order Tracking and Returns </a>
        <a> Newsletter Signup </a>
        <a> Login </a>
      </div>
    </div>)
}

module.exports = Header;