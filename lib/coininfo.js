module.exports = coininfo;

/*** eventually support other info like ports for use in a generic https://github.com/cryptocoinjs/btc-p2p ***/

var map = {
  "BTC": [0x0, 0x80],
  "P2SH": [0x05, null],
  "TEST": [0x6E, 0xEF],
  "TEST-P2SH": [0xC4],
  "DOGE": [0x1E, 0x9E],
  "LTC": [0x30, 0xB0],
  "NMC": [0x34, 0xB4]
}

function coininfo(input) {
  input = input.toUpperCase();
  var versions = map[input];
  if (!versions) return null;

  return {versions: {public: versions[0], private: versions[1]}};
}