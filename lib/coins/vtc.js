/*
  info from:
    https://github.com/vertcoin/vertcoin/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Vertcoin',
  unit: 'VTC'
}

var main = Object.assign({}, {
  hashGenesisBlock: '4d96a915f49d40b1e5c2844d1ee2dccb90013a990ccea12c492d22110489f0c4',
  // nDefaultPort
  port: 5889,
  protocol: {
    // pchMessageStart
    magic: 0xdab5bffa // careful, sent over wire as little endian
  },
  bech32: 'vtc',
  // vSeeds
  seedsDns: [
    'useast1.vtconline.org',
    'vtc.gertjaap.org',
    'seed.vtc.bryangoodson.org',
    'dnsseed.pknight.ca',
    'seed.orderofthetaco.org',
    'seed.alexturek.org',
    'vertcoin.mbl.cash'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 28,
    private: 0x80,
    public: 0x47,
    scripthash: 0x05
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: 'cee8f24feb7a64c8f07916976aa4855decac79b6741a8ec2e32e2747497ad2c9',
  port: 15889,
  // portRpc: 18332,
  protocol: {
    magic: 0x74726576
  },
  bech32: 'tvtc',
  seedsDns: [
    'jlovejoy.mit.edu',
    'gertjaap.ddns.net',
    'fr1.vtconline.org',
    'tvtc.vertcoin.org'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    private: 0xef,
    public: 0x4a,
    scripthash: 0xc4
  }
}, common)

var regtest = Object.assign({}, {
  hashGenesisBlock: '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 18444,
  // portRpc: 18332,
  protocol: {
    magic: 0xdab5bffa
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test,
  regtest: regtest
}
