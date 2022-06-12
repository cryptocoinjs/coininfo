/*
  info from:
    https://github.com/LogosFoundation/lotusd/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Lotus',
  per1: 1e6,
  unit: 'XPI'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000000000abc0cde58ee7e919d3d4de183e6844add1fd5d14b4eac89d958f470',
  // nDefaultPort
  port: 10605,
  portRpc: 10604,
  protocol: {
    // pchMessageStart
    magic: 0xece7eff3 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'mainnet.seeds.cash',
    'seed.be.cash'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 10605,
    private: 0x80,
    public: 0x00,
    scripthash: 0x05
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '106050de32db2a668422cc34aa0f96d739d4189b8e5d6e763deeca527bba9c9f',
  port: 11605,
  portRpc: 11604,
  protocol: {
    magic: 0xecf4f3f4
  },
  seedsDns: [
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

var regtest = Object.assign({}, {
  hashGenesisBlock: '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
  port: 12605,
  portRpc: 12604,
  protocol: {
    magic: 0xecf2e5e7
  },
  seedsDns: [],
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
  test,
  regtest
}
