import React from 'react';
import styles from '../../css/Search.css'
import axios from 'axios';
import SearchResultsListEntry from './SearchResultsListEntry.jsx';
import SearchGlass from './SearchGlass.jsx';
import ClearSearchIcon from './ClearSearchIcon.jsx';
import SearchSubMenu from './SearchSubMenu.jsx';
import { debounce } from '../../../../utils/general.js';

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

    this.debounce = debounce.bind(this);
    this.search = this.search.bind(this);
    this.debouncedSearch = this.debounce(this.search, 500).bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
  }

  changeHandler(e) {
    const search = e.target.value;
    const context = this;
    const oldSearch = this.state.search;

    this.setState({ search: search }, () => {
      const didUserBackSpaceUntilSearchCleared = context.state.search.length < oldSearch.length && this.state.search.length === 0;
      const didUserBackspace = context.state.search.length < oldSearch.length;

      if (didUserBackSpaceUntilSearchCleared) {
        context.clearSearchResults();
      } else if (didUserBackspace) {
        const boldedSuggestions = this.boldSearchStringInSuggestions(context.state.suggestions, context.state.search);
        context.setState({ suggestionsBoldedForRender: boldedSuggestions });
      }
      this.debouncedSearch(this.state.search)
    }
    )
  }

  boldSearchStringInSuggestions(suggestions, search) {
    return suggestions.map((suggestion) => {
      if (suggestion.match.toLowerCase().match(search.toLowerCase())) {
        return this.splitStringIntoPartsMatchingSubString(suggestion, search);
      }
    })
  }

  splitStringIntoPartsMatchingSubString(string, subString) {
    const matchingBeginningIndex = string.match.toLowerCase().match(subString.toLowerCase()).index;
    const matchingEndingIndex = matchingBeginningIndex + subString.length;
    const beginning = string.match.slice(0, matchingBeginningIndex);
    const matched = string.match.slice(matchingBeginningIndex, matchingEndingIndex);
    const end = string.match.slice(matchingEndingIndex, string.match.length);

    return {
      beginning,
      matched,
      end,
      count: string.count
    }
  }

  search(query) {

    const context = this;
    console.log(query)

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
          console.log('here?')

          const boldedSuggestions = this.boldSearchStringInSuggestions(context.state.suggestions, context.state.search);
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