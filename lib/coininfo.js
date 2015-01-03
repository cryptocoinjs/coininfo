var util = require('./util')

var map = {
  // [ Public version, Private version, script hash version, [bip32pub, bip32priv] ]

  "ltc":       [0x30, 0xb0, 0x05, [0x019da462, 0x019d9cfe]],
  "ltc-test":  [0x6f, 0xef, 0xc4],
  
  "mue":       [0x0f, 0x8f, 0x05],
  
  "gmc":       [0x26, 0xa6, 0x05, [0x019da462, 0x019d9cfe]],

  "nmc":       [0x34, 0xb4, 0x05],
  "ppc":       [0x37, 0xb7, 0x75], 

  "rdd":       [0x3d, 0xbd, 0x05],
  "rdd-test":  [0x6f, 0xef, 0xc4],

  "uro":       [0x44, 0xc4, 0x05],
  "uro-test":  [0x6f, 0xef, 0xc4]
  
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

