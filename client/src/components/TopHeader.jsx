import React from 'react';
import styles from '../css/TopHeader.css'
import TopHeaderIcon from './TopHeaderIcon'

const TopHeader = (props) => {
  return (
    <nav className={styles.glassHeaderTopDesktop}>
      <div className={styles.innerForVerticalAlign}>
        <a> Help </a>
        <div className={styles.topHeaderVerticalSpacer}></div>
        <a> Order Tracking and Returns </a>
        <div className={styles.topHeaderVerticalSpacer}></div>
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