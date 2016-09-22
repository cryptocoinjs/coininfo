/*
  info from:
    https://github.com/dashpay/dash/blob/master/src/chainparams.cpp
*/

var assign = require('object-assign')

var common = {
  name: 'Dash',
  unit: 'DASH'
}

var main = assign({}, {
  hashGenesisBlock: '00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6',
  // nDefaultPort
  port: 9999,
  portRpc: 9998,
  protocol: {
    magic: 0xbd6b0cbf // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'darkcoin.io',
    'dnsseed.darkcoin.io',
    'darkcoin.qa',
    'dnsseed.darkcoin.qa',
    'masternode.io',
    'dnsseed.masternode.io',
    'dashpay.io',
    'dnsseed.dashpay.io'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x02FE52CC,
      public: 0x02FE52F8
    },
    bip44: 5,
    private: 0xcc,
    public: 0x4c,
    scripthash: 0x10
  }
}, common)

var test = assign({}, {
  hashGenesisBlock: '00000bafbc94add76cb75e2ec92894837288a481e5c005f6563d91623bf8bc2c',
  port: 19999,
  portRpc: 19998,
  seedsDns: [
    'darkcoin.io',
    'testnet-seed.darkcoin.io',
    'darkcoin.qa',
    'testnet-seed.darkcoin.qa',
    'masternode.io',
    'test.dnsseed.masternode.io'
  ],
  versions: {
    bip32: {
      private: 0x3a805837,
      public: 0x3a8061a0
    },
    bip44: 1,
    private: 0xef,
    public: 0x8b,
    scripthash: 0x13
  }
}, common)

module.exports = {
  main: main,
  test: test
}
