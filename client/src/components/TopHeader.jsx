import React from 'react';
import styles from '../css/TopHeader.css'
import TopHeaderIcon from './TopHeaderIcon'

const TopHeader = (props) => {
  return (
    <nav className="glass-header-top-desktop">
      <div className="inner-for-vertical-align">
        <a> Help </a>
        <div className="top-header-vertical-spacer"></div>
        <a> Order Tracking and Returns </a>
        <div className="top-header-vertical-spacer"></div>
        <em>
          <a> Newsletter Signup </a>
        </em>
        <a> Login
        <a><TopHeaderIcon /></a>
        </a>
      </div>
    </nav>
  )
}

module.exports = TopHeader;