// shallow assign
function assign (o1, o2) {
  Object.keys(o2).forEach(function (key) {
    if (!(key in o1)) {
      o1[key] = o2[key]
    }
  })

  return o1
}

function endsWith (str, suffix) {
  var offset = str.length - suffix.length
  return str.lastIndexOf(suffix) === offset
}

module.exports = {
  assign: assign,
  endsWith: endsWith
}
