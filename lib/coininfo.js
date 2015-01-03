var util = require('./util')

function coininfo(input) {
  input = input.toLowerCase()
  
  var coin, isTest
  if (util.endsWith(input, '-test')) {
    coin = input.replace('-test', '')
    isTest = true
  } else {
    coin = input
    isTest = false
  }

  var coini
  try {
    coini = require('./coins/' + coin)
  } catch(e) {
    // coin not supported yet
    if (e.code === 'MODULE_NOT_FOUND')
      return null
    else
      throw e // some other error, maybe malformed file
  }

  if (isTest)
    return coini.test ? coini.test : null
  else
    return coini.main
}

module.exports = coininfo

