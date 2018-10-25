import React from "react";
import styles from "../css/app.css";
import Header from "../components/Header.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      < div >
        <Header />
        Hello from react!
      </div >
    );
  }
}

module.exports = App;
