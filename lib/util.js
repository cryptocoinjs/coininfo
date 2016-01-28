function endsWith (str, suffix) {
  var offset = str.length - suffix.length
  return str.lastIndexOf(suffix) === offset
}

module.exports = {
  endsWith: endsWith
}
