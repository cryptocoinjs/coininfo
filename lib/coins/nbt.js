var assign = require('object-assign')
var bip44Constants = require('bip44-constants')

var common = {
  name: 'NuBits',
  per1: 1e6,
  unit: 'NBT'
}

var main = assign({}, {
  // nDefaultPort
  port: 7890,
  portRpc: 14002,
  protocol: {
    // pchMessageStart
    magic: 0xd9b4bef9 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: bip44Constants.NuBits - 0x80000000,
    private: 0x96,
    public: 0x19,
    scripthash: 0x1a
  }
}, common)

module.exports = {
  main: main
}
