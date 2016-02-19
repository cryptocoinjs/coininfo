var assign = require('object-assign')
var bip44Constants = require('bip44-constants')

// https://github.com/rat4/blackcoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Blackcoin',
  per1: 1e8,
  unit: 'BLK'
}

var main = assign({}, {
  port: 15714,
  portRpc: 15715,
  protocol: {
    magic: 0x05223570 // careful, sent over wire as little endian
  },
  seedsDns: [
    'rat4.blackcoin.co',
    'seed.blackcoin.co',
    'archon.darkfox.id.au',
    'foxy.seeds.darkfox.id.au',
    '6.syllabear.us.to',
    'bcseed.syllabear.us.to'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: bip44Constants.Blackcoin - 0x80000000,
    private: 0x99,
    public: 0x19,
    scripthash: 0x55
  }
}, common)

module.exports = {
  main: main,
  test: null
}
