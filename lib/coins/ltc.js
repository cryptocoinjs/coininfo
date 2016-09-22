var assign = require('object-assign')

// https://github.com/litecoin-project/litecoin/blob/master-0.10/src/chainparams.cpp

var common = {
  name: 'Litecoin',
  unit: 'LTC'
}

var main = assign({}, {
  hashGenesisBlock: '12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2',
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
    bip44: 2,
    private: 0xb0,
    public: 0x30,
    scripthash: 0x05
  }
}, common)

var test = assign({}, {
  hashGenesisBlock: 'f5ae71e26c74beacc88382716aced69cddf3dffff24f384e1808905e0188f68f',
  versions: {
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
