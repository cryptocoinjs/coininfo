module.exports = coininfo;

/*** eventually support other info like ports for use in a generic https://github.com/cryptocoinjs/btc-p2p ***/

var map = {
  // [ Public version, Private version, P2SH version ]
  "BTC":       [0x00, 0x80, 0x05],
  "BTC-TEST":  [0x6E, 0xEF, 0xC4],

  "DOGE":      [0x1E, 0x9E, 0x16],
  "DOGE-TEST": [0x71, 0xF1, 0xC4],

  "LTC":       [0x30, 0xB0, 0x05],
  "LTC-TEST":  [0x6F, 0xEF, 0xC4],

  "NMC":       [0x34, 0xB4, 0x05],
  
  // Left for backward compatibility
  // Those are all version bytes for Bitcoin
  "TEST": [0x6E, 0xEF],
  "P2SH": [0x05, null],
  "TEST-P2SH": [0xC4]

}

function coininfo(input) {
  input = input.toUpperCase();
  var versions = map[input];
  if (!versions) return null;
  if (versions.length < 3) {
    console.warn('coininfo: '+input+' is deprecated, please check the current list of supported coins');
  }

  return {versions: {public: versions[0], private: versions[1], p2sh: versions[2]}};
}
