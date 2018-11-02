import React from 'react';
import SearchResultsListEntry from './SearchResultsListEntry';

class SearchSubMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.searchResults.length > 0) {
      return (
        <div className="search-menu-sub-menu">
          <div className="search-menu-sub-menu-grid">
            <div className="search-menu-sub-menu-column-header"> Suggestions </div>
            <div className="search-menu-sub-menu-column-header"> Products </div>

            <ul className="search-menu-sub-menu-column">
              {this.props.suggestionsBoldedForRender.map((suggestion, i) => {
                if (!!suggestion === true) {
                  return <li
                    className="search-suggestion" key={i}>
                    {suggestion.beginning}<strong>{suggestion.matched}</strong>{suggestion.end} - ({suggestion.count})
            </li>
                } else {
                  return <li key={i}></li>
                }
              })}
              <div className="see-all-query"> See All "{this.props.search}" </div>
            </ul>

            <ul className="search-products-column">
              {this.props.searchResults.map((searchResult, i) => (
                <SearchResultsListEntry searchResult={searchResult} key={i} />
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      return (<div></div>);
    }
  }
}

module.exports = SearchSubMenu;
