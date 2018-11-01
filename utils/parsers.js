const splitStringIntoPartsMatchingSubString = (string, subString) => {
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

const boldSearchStringInSuggestions = (suggestions, search) => suggestions.map((suggestion) => {
  if (suggestion.match.toLowerCase().match(search.toLowerCase())) {
    return splitStringIntoPartsMatchingSubString(suggestion, search);
  }
  return null;
})

module.exports = {
  splitStringIntoPartsMatchingSubString,
  boldSearchStringInSuggestions
}