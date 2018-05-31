/*
  info from:
    https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Ravencoin',
  unit: 'RVN'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0x0000006b444bc2f2ffe627be9d9e7e7a0730000870ef6eb6da46c8eae389df90',
  // nDefaultPort
  port: 8767,
  portRpc: 8767,
  protocol: {
    // pchMessageStart
    magic: 0x4e564152 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed-raven.ravencoin.org',
    'seed-raven.bitactivate.com'
  ],
  // base58Prefixes
  versions: {
    bip44: 175,
    private: 0x80,
    public: 0x3c,
    scripthash: 0x7a
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '0x000000055c6b201ac99ed634953f92bd52239f5b26e090ce3caab6ec81bec921',
  port: 18767,
  portRpc: 18767,
  protocol: {
    magic: 0x544e5652
  },
  seedsDns: [
    'seed-testnet-raven.ravencoin.org',
    'seed-testnet-raven.bitactivate.com'
  ],
  versions: {
    bip44: 175,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
