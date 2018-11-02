import React from 'react';
import styles from '../../css/Search.css'
import axios from 'axios';
import SearchGlass from './SearchGlass.jsx';
import ClearSearchIcon from './ClearSearchIcon.jsx';
import SearchSubMenu from './SearchSubMenu.jsx';
import { debounce } from '../../../../utils/general.js';
import { boldSearchStringInSuggestions } from '../../../../utils/parsers.js';

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
        const boldedSuggestions = boldSearchStringInSuggestions(context.state.suggestions, context.state.search);
        context.setState({ suggestionsBoldedForRender: boldedSuggestions });
      }
      this.debouncedSearch(this.state.search)
    }
    )
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

          const boldedSuggestions = boldSearchStringInSuggestions(context.state.suggestions, context.state.search);
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
    return (
      <li className="search-wrapper-outer">
        <div className="search-input-wrapper">
          <SearchGlass />
          <input id="search-box" placeholder="search" type="text" value={this.state.search} onChange={(e) => { this.changeHandler(e) }}></input>
          <ClearSearchIcon search={this.state.search} clearSearchResults={this.clearSearchResults} />
        </div>

        <SearchSubMenu suggestionsBoldedForRender={this.state.suggestionsBoldedForRender}
          searchResults={this.state.searchResults}
          search={this.state.search} />
      </li>
    )
  }
}

module.exports = Search;