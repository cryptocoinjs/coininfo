/*
  info from:
    https://github.com/AXErunners/axe/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Axe',
  unit: 'AXE'
}

var main = Object.assign({}, {
  hashGenesisBlock: '00000c33631ca6f2f61368991ce2dc03306b5bb50bf7cede5cfbba6db38e52e6',
  // nDefaultPort
  port: 9937,
  portRpc: 9337,
  protocol: {
    magic: 0x046bceb5 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed1.0313370.xyz',
    'seed2.0313370.xyz',
    '207.246.65.114',
    '45.32.168.226',
    '45.77.149.231'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 4242,
    private: 0xcc,
    public: 0x37,
    scripthash: 0x10
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '00000bafbc94add76cb75e2ec92894837288a481e5c005f6563d91623bf8bc2c',
  port: 19937,
  portRpc: 19337,
  seedsDns: [
    'seed1.0313370.xyz',
    'seed2.0313370.xyz'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x8c,
    scripthash: 0x13
  }
}, common)

module.exports = {
  main: main,
  test: test
}
