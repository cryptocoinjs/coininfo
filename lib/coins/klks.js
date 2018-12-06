/*
  info from:
    https://github.com/dashpay/dash/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Kalkulus',
  unit: 'KLKS'
}

var main = Object.assign({}, {
  hashGenesisBlock: 'e109a992cb29055263861f14177973a8e352e40668a26e16e94accbd17b1a192',
  // nDefaultPort
  port: 51121,
  portRpc: 51122,
  protocol: {
    magic: 0xbd6b0cbf // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'node01.kalkul.us',
    'node02.kalkul.us',
    'node03.kalkul.us',
    'node04.kalkul.us',
    'node05.kalkul.us',
    'node06.kalkul.us'
  ],
  // base58Prefixes
  versions: {
    private: 0xae,
    public: 0x2e,
    scripthash: 0x0d
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '00000bafbc94add76cb75e2ec92894837288a481e5c005f6563d91623bf8bc2c',
  port: 19999,
  portRpc: 19998,
  seedsDns: [
    'dashdot.io',
    'testnet-seed.dashdot.io',
    'masternode.io',
    'test.dnsseed.masternode.io'
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
