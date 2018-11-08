import React from 'react';
import SearchResultsListEntry from './SearchResultsListEntry';
import styles from '../../css/Search.css';

class SearchSubMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.searchResults.length > 0) {
      return (
        <div className={styles.searchMenuSubMenu}>
          <div className={styles.searchMenuSubMenuGrid}>
            <div className={styles.searchMenuSubMenuColumnHeader}> Suggestions </div>
            <div className={styles.searchMenuSubMenuColumnHeader}> Products </div>

            <ul className={styles.searchMenuSubMenuColumn}>
              {this.props.suggestionsBoldedForRender.map((suggestion, i) => {
                if (!!suggestion === true) {
                  return <li
                    className={styles.searchSuggestion} key={i}>
                    {suggestion.beginning}<strong>{suggestion.matched}</strong>{suggestion.end} - ({suggestion.count})
            </li>
                } else {
                  return <li key={i}></li>
                }
              })}
              <div className={styles.seeAllQuery}> See All "{this.props.search}" </div>
            </ul>

            <ul className={styles.searchProductsColumn}>
              {this.props.searchResults.map((searchResult, i) => (
                <SearchResultsListEntry searchResult={searchResult} key={i} />
              ))}
            </ul>
          </div>
        </div >
      )
    } else {
      return (<div></div>);
    }
  }
}

module.exports = SearchSubMenu;
