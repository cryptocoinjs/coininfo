/*
  info from:
    https://github.com/rat4/blackcoin/blob/master/src/chainparams.cpp
*/

var util = require('../util')

var common = {
  name: 'BlackCoin',
  per1: 1e8,
  unit: 'BC'
}

var main = util.assign({
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    private: 0x99,
    public: 0x19,
    scripthash: 0x55
  }
}, common)

module.exports = {
  main: main,
  test: null
}
