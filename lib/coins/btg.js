/*
  info from:
    https://github.com/BTCGPU/BTCGPU/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Bitcoin Gold',
  unit: 'BTG'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8338,
  protocol: {
    // pchMessageStart
    magic: 0x446d47e1 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'eu-dnsseed.bitcoingold-official.org',
    'dnsseed.bitcoingold.org',
    'dnsseed.btcgpu.org'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 156,
    private: 0x80,
    public: 0x26,
    scripthash: 0x17
  }
}, common)

module.exports = {
  main: main
}
