var assign = require('object-assign')
var bip44Constants = require('bip44-constants')

// https://github.com/litecoin-project/litecoin/blob/master-0.10/src/chainparams.cpp

var common = {
  name: 'Litecoin',
  unit: 'LTC'
}

var main = assign({}, {
  port: 9333,
  protocol: {
    magic: 0xdbb6c0fb
  },
  seedsDns: [
    'dnsseed.litecointools.com',
    'dnsseed.litecoinpool.org',
    'dnsseed.ltc.xurious.com',
    'dnsseed.koin-project.com',
    'dnsseed.weminemnc.com'
  ],
  versions: {
    bip32: {
      private: 0x019d9cfe,
      public: 0x019da462
    },
    bip44: bip44Constants.Litecoin - 0x80000000,
    private: 0xb0,
    public: 0x30,
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
