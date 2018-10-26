import React from "react";
import styles from "../css/app.css";
import TopHeader from "./TopHeader.jsx";
import BottomHeader from "./BottomHeader.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header-desktop">
        <TopHeader />
        <BottomHeader />
      </div >
    );
  }
}

module.exports = App;
