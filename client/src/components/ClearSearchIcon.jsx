import React from 'react'

// const ClearSearchIcon = props => (
//   <svg className="clear-search-icon" viewBox="0 0 18 24" {...props}>
//     <path
//       d="M17 4l-8 8 8 8M1 4l8 8-8 8"
//       fill="none"
//       stroke="currentColor"
//       strokeMiterlimit={10}
//       strokeWidth={2}
//     />
//   </svg>
// )

class ClearSearchIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick() {
    this.props.clearSearchResults()
  }

  render() {
    // TODO currently there is a slight lag when clicking this button
    // it may be possible to resolve levearging react life-cycle hooks
    if (this.props.search.length > 0) {
      return (
        <svg onClick={() => (this.handleClick())} className="clear-search-icon" viewBox="0 0 18 24" {...this.props}>
          <path
            d="M17 4l-8 8 8 8M1 4l8 8-8 8"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </svg>
      )
    } else {
      return (<div className="clear-search-icon"></div>)
    }
  }
}

module.exports = ClearSearchIcon;
