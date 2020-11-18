// https://github.com/peercoin/peercoin/tree/v0.7.0ppc/src
// https://github.com/peercoin/peercoin/blob/v0.7.0ppc/src/${filename}

var common = {
  name: 'Peercoin',
  per1: 1e6, // util.h:40
  unit: 'PPC',
  messagePrefix: '\x18Peercoin Signed Message:\n' // main.cpp:77
}

var main = Object.assign({}, {
  hashGenesisBlock: '0000000032fe677166d54963b62a4677d8957e87c508eaa4fd7eb1c880cd27e3', // main.h:84
  // nDefaultPort
  port: 9901, // protocol.h:18
  portRpc: 9902, // protocol.h:19
  protocol: {
    // pchMessageStart
    magic: 0xe5e9e8e6 // careful, sent over wire as little endian protocol.cpp:31
  },
  // vSeeds
  seedsDns: [
    // net.cpp:1209
    'seed.peercoin.net',
    'seed2.peercoin.net',
    'seed.peercoin-library.org',
    'ppcseed.ns.7server.net'
  ],
  versions: {
    // not implemented in Peercoin <= v0.7.x nodes, only 3rd party wallets
    // https://github.com/jmacwhyte/recovery-phrase-recovery/blob/52073aba08e9d01032c0b5aff8c682911fe2e5fc/js/bitcoinjs-extensions.js#L58
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 6, // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    private: 0xb7, // base58.h:402 ; 128 + PUBKEY_ADDRESS
    public: 0x37, // base58.h:276
    scripthash: 0x75 // base58.h:277
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '00000001f757bb737f6596503e17cd17b0658ce630cc727c0cca81aec47c9f06',
  port: 9903,
  portRpc: 9904,
  protocol: {
    magic: 0xefc0f2cb
  },
  seedsDns: [
    'tseed.peercoin.net',
    'tseed2.peercoin.net',
    'tseed.peercoin-library.org'
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
