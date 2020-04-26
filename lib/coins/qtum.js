/*
  info from:
    https://github.com/qtumproject/qtum/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Qtum',
  unit: 'QTUM'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000075aef83cf2853580f8ae8ce6f8c3096cfa21d98334d6e3f95e5582ed986c',
  // nDefaultPort
  port: 3888,
  protocol: {
    // pchMessageStart
    magic: 0xd3a6cff1 // careful, sent over wire as little endian
  },
  bech32: 'qc',
  // vSeeds
  seedsDns: [
    'qtum3.dynu.net'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 2301,
    private: 0x80,
    public: 0x3A,
    scripthash: 0x32
  }
}, common)

module.exports = {
  main
}
