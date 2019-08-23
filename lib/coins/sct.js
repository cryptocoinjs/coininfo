/*
  info from:
    https://github.com/smartcryptotech/SmartCryptoTech/blob/master/src/chainparams.cpp
*/
var common = {
  name: 'SmartCryptoTech',
  per1: 1e8,
  unit: 'SCT'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000001c6b39009a0ddb3b6526e048cf3225e27ec2a296922f710f634867c846c',
  port: 9251,
  portRpc: 9252,
  protocol: {
    magic: 0x05223570 // careful, sent over wire as little endian
  },
  seedsDns: [
    'seed.smart-cryto-tech.co.uk',
    'seed2.smart-cryto-tech.co.uk',
    'seed3.smart-cryto-tech.co.uk'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 0xa,
    private: 0xbf,
    public: 0x40,
    scripthash: 0x55
  }
}, common)

module.exports = {
  main: main,
  test: null
}
