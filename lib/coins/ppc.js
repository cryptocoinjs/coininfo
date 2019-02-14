/*
 info from:
   https://github.com/peercoin/peercoin/blob/master/src/protocol.cpp
*/
var common = {
  name: 'Peercoin',
  per1: 1e6,
  unit: 'PPC',
  messagePrefix: '\x18Peercoin Signed Message:\n'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0000000032fe677166d54963b62a4677d8957e87c508eaa4fd7eb1c880cd27e3',
  // nDefaultPort
  port: 9901,
  portRpc: 9902,
  protocol: {
    // pchMessageStart src/protocol.cpp
    magic: 0xe5e9e8e6 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed.peercoin.net',
    'seed2.peercoin.net',
    'seed.peercoin-library.org',
    'ppcseed.ns.7server.net'
  ],
  // base58Prefixes
  versions: {
    // from https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
    // m / purpose' / coin_type' / account' / change / address_index
    // m/44'/6'/0'/0
    // not implemented in Peercoin <= v0.7.x nodes, only 3rd party wallets
    // https://github.com/jmacwhyte/recovery-phrase-recovery/blob/master/js/bitcoinjs-extensions.js#L58
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    // from https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    // not implemented in Peercoin <= v0.7.x nodes, only 3rd party wallets
    // index hexa symbol coin
    // 6 0x80000006 PPC Peercoin
    bip44: 6,
    // from src/base58.h, CBitcoinSecret SetSecret()
    // 128 + PUBKEY_ADDRESS == 183 [ 0xb7 ]
    private: 0xb7,
    // src/base58.h: PUBKEY_ADDRESS = 55,  // ppcoin: addresses begin with 'P'
    public: 0x37,
    // src/base58.h: SCRIPT_ADDRESS = 117, // ppcoin: addresses begin with 'p'
    scripthash: 0x75
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
  main: main,
  test: test
}
