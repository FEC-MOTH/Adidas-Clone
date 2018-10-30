import React from 'react';
import styles from '../css/Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFlyout: false
    }
  }



  render() {
    if (this.state.displayFlyout === true) {

    }

    return (

      <li className="search-wrapper-outer">
        <input id="search-box" placeholder="search" type="text"></input>

        {this.state.displayFlyout === false &&
          <div className="search-menu-sub-menu">HELLO</div>
        }
      </li>
    )
  }
}

module.exports = Search;

// steps
// make search a controlled component
// after some debounce time and no more than two characters
// submit a request to /search
// and a request to /search/suggestions
// when those results come back, set some state which causes the fly out to conditionally
// render