// https://github.com/RavenProject/Ravencoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Ravencoin',
  unit: 'RVN'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0000006b444bc2f2ffe627be9d9e7e7a0730000870ef6eb6da46c8eae389df90',
  port: 8767,
  protocol: {
    magic: 0x4e564152
  },
  bech32: 'rc',
  seedsDns: [
    'seed-raven.bitactivate.com',
    'seed-raven.ravencoin.com',
    'seed-raven.ravencoin.org'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 175,
    private: 0x80,
    public: 0x3c,
    scripthash: 0x7a
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '000000ecfc5e6324a079542221d00e10362bdc894d56500c414060eea8a3ad5a',
  port: 18770,
  protocol: {
    magic: 0x544e5652
  },
  bech32: 'tr',
  seedsDns: [
    'seed-testnet-raven.bitactivate.com',
    'seed-testnet-raven.ravencoin.com',
    'seed-testnet-raven.ravencoin.org'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main,
  test
}
