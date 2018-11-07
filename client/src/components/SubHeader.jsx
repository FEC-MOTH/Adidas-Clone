import React from "react";
import styles from "../css/SubHeader.css";

const SubHeader = (props) => (
  <div className="sub-header">
    <div className="sub-header-items-wrapper">
      <div className="sub-header-item">
        <svg className="sub-header-item-glyph" viewBox="0 0 19 19" id="usp-delivery" width="100%" height="100%">
          <g fill="none" stroke="currentColor" strokeMiterlimit="10">
            <path d="M13.42 13.5H9.5"></path>
            <path strokeLinecap="square" d="M4.5 5.5h10l4 3v5h-2M6.5 13.5h-2m0-6h-4"></path>
            <circle cx="8" cy="13" r="1.5"></circle>
            <circle cx="15" cy="13" r="1.5"></circle>
            <path strokeLinecap="square" d="M1.5 9.5h3m-2 2h2"></path>
          </g>
        </svg>
        <div className="sub-header-item-label"> FREE SHIPPING AND FREE RETURNS </div>
      </div>
      <div className="sub-header-item">
        <img className="sub-header-item-image" src={process.env.CDN_ROOT.concat('/assets/img/subHeader/adidas_icon_creatorID_WHITE_v6.png')} alt="CREATORS GET REWARDED – JOIN THE NEW ADIDAS CREATORS CLUB" />
        <div className="sub-header-item-label"> Creators Get Rewarded - Join the New Adidas Creators Club </div>
      </div>
    </div>
  </div>
)

module.exports = SubHeader;