/*
  info from:
    https://github.com/dashpay/dash/blob/master/src/chainparams.cpp
*/

var util = require('../util')

var common = {
  name: 'Dash',
  unit: 'DASH'
}

var main = util.assign({
  // nDefaultPort
  port: 9999,
  portRpc: 9998,
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
    private: 204,
    public: 76,
    scripthash: 16,
    bip44: 5
  }
}, common)

var test = util.assign({
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
      private: 0x04358394,
      public: 0x043587cf
    },
    private: 0x3a8058037,
    public: 0x3a8061a0,
    scripthash: 0xc4,
    bip44: 1
  }
}, common)

module.exports = {
  main: main,
  test: test
}
