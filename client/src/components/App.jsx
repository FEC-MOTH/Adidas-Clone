import React from "react";
import styles from "../css/app.css";
import TopHeader from "./TopHeader.jsx";
import BottomHeader from "./BottomHeader.jsx";
import SubHeader from "./SubHeader.jsx";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    // We set the axios baseURL here so that api requests will got to the
    // right location even when we are making them from a proxy server
    axios.defaults.baseURL = "http://" + process.env.HOSTNAME + ":" + process.env.PORT;
  }

  render() {
    return (
      <div className="header-desktop">
        <TopHeader />
        <BottomHeader />
        <SubHeader />
      </div >
    );
  }
}

module.exports = App;
