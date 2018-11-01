module.exports = {
  debounce: (func, delay) => {
    let currentlyRunningTimeout

    return (...args) => {
      clearTimeout(currentlyRunningTimeout)
      currentlyRunningTimeout = setTimeout(() => func(...args), delay)
    }
  }
}