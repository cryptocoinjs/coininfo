module.exports = coininfo

/*** eventually support other info like ports for use in a generic https://github.com/cryptocoinjs/btc-p2p ***/

var map = {
  // [ Public version, Private version, script hash version, [bip32pub, bip32priv] ]
  "BTC":       [0x00, 0x80, 0x05, [0x0488b21e, 0x0488ade4]],
  "BTC-TEST":  [0x6F, 0xEF, 0xC4, [0x043587cf, 0x04358394]],

  "DOGE":      [0x1E, 0x9E, 0x16, [0x02facafd, 0x02fac398]],
  "DOGE-TEST": [0x71, 0xF1, 0xC4],

  "LTC":       [0x30, 0xB0, 0x05, [0x019da462, 0x019d9cfe]],
  "LTC-TEST":  [0x6F, 0xEF, 0xC4],

  "NMC":       [0x34, 0xB4, 0x05],
  "PPC":       [0x37, 0xB7, 0x75], 

  "RDD":       [0x3D, 0xBD, 0x05],
  "RDD-TEST":  [0x6F, 0xEF, 0xC4],

  "URO":       [0x44, 0xC4, 0x05],
  "URO-TEST":  [0x6F, 0xEF, 0xC4]
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
