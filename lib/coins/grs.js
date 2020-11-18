/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Groestlcoin',
  per1: 1e8,
  unit: 'GRS',
  messagePrefix: '\x1CGroestlCoin Signed Message:\n'
}

var main = Object.assign({}, {
  hashGenesisBlock: '00000ac5927c594d49cc0bdb81759d0da8297eb614683d3acb62f0703b639023',
  // nDefaultPort
  port: 1331,
  portRpc: 1441,
  protocol: {
    // pchMessageStart
    magic: 0xd4b4bef9 // careful, sent over wire as little endian
  },
  bech32: 'grs',
  // vSeeds
  seedsDns: [
    'dnsseed1.groestlcoin.org',
    'dnsseed2.groestlcoin.org',
    'dnsseed3.groestlcoin.org',
    'dnsseed4.groestlcoin.org'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 17,
    private: 0x80,
    public: 0x24,
    scripthash: 0x05
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '0x000000ffbb50fc9898cdd36ec163e6ba23230164c0052a28876255b7dcf2cd36',
  port: 17777,
  portRpc: 17766,
  protocol: {
    magic: 0x0709110b
  },
  bech32: 'tgrs',
  seedsDns: [
    'testnet-seed1.groestlcoin.org',
    'testnet-seed2.groestlcoin.org'
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
  hashGenesisBlock: '0x000000ffbb50fc9898cdd36ec163e6ba23230164c0052a28876255b7dcf2cd36',
  port: 18888,
  portRpc: 18443,
  protocol: {
    magic: 0xdab5bffa
  },
  bech32: 'grsrt',
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
