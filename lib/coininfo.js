module.exports = coininfo

/*** eventually support other info like ports for use in a generic https://github.com/cryptocoinjs/btc-p2p ***/

var map = {
  // [ Public version, Private version, script hash version, [bip32pub, bip32priv] ]
  "bc":        [0x19, 0x99, 0x55, [0x0488b21e, 0x0488ade4]], 

  "doge":      [0x1e, 0x9e, 0x16, [0x02facafd, 0x02fac398]],
  "doge-test": [0x71, 0xf1, 0xc4],

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
  input = input.toUpperCase()
  var versions = map[input]
  if (!versions) return null
  var ret = {
    versions: {
      public: versions[0],
      private: versions[1],
      scripthash: versions[2],
      bip32: null
    }
  }

  //check for bip32
  if (versions['3'])
    ret.versions.bip32 = {public: versions[3][0], private: versions[3][1]}

  return ret
}
