import React from 'react';
import styles from '../css/Search.css'
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      suggestionsBoldedForRender: [],
      search: "",
      displayFlyout: false
    }
    this.search = this.search.bind(this);
    this.debouncedSearch = this.debounce(this.search, 500).bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  debounce(callback, timeout) {
    var currentlyRunningTimeout;

    return function () {
      var args = [...arguments];
      clearTimeout(currentlyRunningTimeout);
      currentlyRunningTimeout = setTimeout(() => callback(...args), timeout);
    }
  }

  changeHandler(e) {
    const context = this;
    this.setState({ search: e.target.value }, () => {

      /*
      if (context.state.suggestions.length > 2) {
        const boldedSuggestions = context.state.suggestions.map((suggestion) => {
          if (suggestion.match.toLowerCase().match(context.state.search.toLowerCase())) {
            const matchingBeginningIndex = suggestion.match.toLowerCase().match(context.state.search.toLowerCase()).index;
            const matchingEndingIndex = matchingBeginningIndex + context.state.search.length;
            const beginning = suggestion.match.slice(0, matchingBeginningIndex);
            const matched = suggestion.match.slice(matchingBeginningIndex, matchingEndingIndex);
            const end = suggestion.match.slice(matchingEndingIndex, suggestion.match.length);

            return {
              beginning,
              matched,
              end,
              count: suggestion.count
            }
          }
        })
        context.setState({ suggestionsBoldedForRender: boldedSuggestions });
        */
      this.debouncedSearch(this.state.search)

    }
    )
  }

  search(query) {
    const context = this;

    if (query.length > 2) {
      axios.get('/api/products/search/suggestions', {
        params: {
          q: query
        }
      }).then((data) => {
        context.setState({ suggestions: data.data }, () => {
          // figure out some efficient method for when you should run this, and when you should
          // run the corresponding method client side!

          const boldedSuggestions = context.state.suggestions.map((suggestion) => {
            if (suggestion.match.toLowerCase().match(context.state.search.toLowerCase())) {
              const matchingBeginningIndex = suggestion.match.toLowerCase().match(context.state.search.toLowerCase()).index;
              const matchingEndingIndex = matchingBeginningIndex + context.state.search.length;
              const beginning = suggestion.match.slice(0, matchingBeginningIndex);
              const matched = suggestion.match.slice(matchingBeginningIndex, matchingEndingIndex);
              const end = suggestion.match.slice(matchingEndingIndex, suggestion.match.length);

              return {
                beginning,
                matched,
                end,
                count: suggestion.count
              }
            }
          })
          context.setState({ suggestionsBoldedForRender: boldedSuggestions });


        });
      })
    }
  }

  render() {
    if (this.state.displayFlyout === true) {

    }

    return (

      <li className="search-wrapper-outer">
        <input id="search-box" placeholder="search" type="text" value={this.state.search} onChange={(e) => { this.changeHandler(e) }}></input>

        <div className="search-menu-sub-menu">
          <ul className="search-menu-sub-menu-column">
            <li className="search-menu-sub-menu-column-header"> Suggestions </li>
            {this.state.suggestionsBoldedForRender.map((suggestion) => {
              if (!!suggestion === true) {
                return <li
                  className="search-suggestion" >
                  {suggestion.beginning}<b>{suggestion.matched}</b>{suggestion.end} - ({suggestion.count})
              </li>
              } else {
                return <li></li>
              }
            })}
          </ul>

          <ul className="search-menu-sub-menu-column">
            <li className="search-menu-sub-menu-column-header"> Column 2 </li>

          </ul>

        </div>

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