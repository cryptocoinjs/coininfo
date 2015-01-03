var util = require('./util')

var map = {
  // [ Public version, Private version, script hash version, [bip32pub, bip32priv] ]
  

}



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

  // does it exist in the simplified table above?
  var coini
  var versions = map[input]
  if (versions == null) {
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
  } else {
    coini = {
      versions: {
        public: versions[0],
        private: versions[1],
        scripthash: versions[2],
        bip32: null
      }
    }

    //check for bip32
    if (versions['3'])
      coini.versions.bip32 = {public: versions[3][0], private: versions[3][1]}
    
    return coini
  }
}

module.exports = coininfo

