var assign = require('object-assign')
var bip44Constants = require('bip44-constants')

var common = {
  name: 'Reddcoin',
  unit: 'RDD'
}

var main = assign({}, {
  versions: {
    bip44: bip44Constants.Reddcoin - 0x80000000,
    private: 0xbd,
    public: 0x3d,
    scripthash: 0x05
  }
}, common)

var test = assign({}, {
  versions: {
    bip44: bip44Constants.Testnet - 0x80000000,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
