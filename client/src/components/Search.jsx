import React from 'react';
import styles from '../css/Search.css'
import axios from 'axios';
import SearchResultsListEntry from '../components/SearchResultsListEntry.jsx';
import SearchGlass from './SearchGlass.jsx';
import ClearSearchIcon from './ClearSearchIcon.jsx';
import SearchSubMenu from './SearchSubMenu.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      suggestionsBoldedForRender: [],
      searchResults: [],
      search: "",
      displayFlyout: false
    }
    this.search = this.search.bind(this);
    this.debouncedSearch = this.debounce(this.search, 500).bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
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
    const oldSearch = this.state.search;

    this.setState({ search: e.target.value }, () => {
      if (context.state.search.length < oldSearch.length && this.state.search.length === 0) {
        context.clearSearchResults();
      } else if (context.state.search.length < oldSearch.length) {
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
      }
      this.debouncedSearch(this.state.search)

    }
    )
  }

  renderFlyOut() {
    if (this.setState.displayFlyout === true) {
      return (
        <div className="search-menu-sub-menu">
          <div className="search-menu-sub-menu-grid">
            <div className="search-menu-sub-menu-column-header"> Suggestions </div>
            <div className="search-menu-sub-menu-column-header"> Products </div>

            <ul className="search-menu-sub-menu-column">
              {this.state.suggestionsBoldedForRender.map((suggestion, i) => {
                if (!!suggestion === true) {
                  return <li
                    className="search-suggestion" key={i}>
                    {suggestion.beginning}<b>{suggestion.matched}</b>{suggestion.end} - ({suggestion.count})
              </li>
                } else {
                  return <li key={i}></li>
                }
              })}
            </ul>

            <ul className="search-products-column">
              {this.state.searchResults.map((searchResult, i) => (
                <SearchResultsListEntry searchResult={searchResult} key={i} />
              ))}
            </ul>
          </div>
        </div>
      )
    }
  }

  search(query) {
    const context = this;

    if (query.length > 2) {
      axios.all([
        axios.get('/api/products/search/suggestions', {
          params: {
            q: query
          }
        }),
        axios.get('/api/products/search', {
          params: {
            q: query
          }
        })
      ]).then(axios.spread((suggestions, searchResults) => {
        context.setState({ suggestions: suggestions.data, searchResults: searchResults.data }, () => {
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
          context.setState({ displayFlyout: true })
        });
      }))
    }
  }

  clearSearchResults() {
    this.setState({ suggestions: [], suggestionsBoldedForRender: [], searchResults: [], search: "" })
  }

  render() {
    if (this.state.displayFlyout === true) {

    }

    return (

      <li className="search-wrapper-outer">
        <div className="search-input-wrapper">
          <SearchGlass />
          <input id="search-box" placeholder="search" type="text" value={this.state.search} onChange={(e) => { this.changeHandler(e) }}></input>
          <ClearSearchIcon search={this.state.search} clearSearchResults={this.clearSearchResults} />
        </div>

        <SearchSubMenu suggestionsBoldedForRender={this.state.suggestionsBoldedForRender}
          searchResults={this.state.searchResults} />

      </li>
    )
  }
}

module.exports = Search;

// 