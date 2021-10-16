/*
  info from:
    https://github.com/c0ban/c0ban/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'c0ban',
  unit: 'RYO'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000000005184ffce04351e687a3965b300ee011d26b2089232cd039273be4a67',
  // nDefaultPort
  port: 3881,
  portRpc: 3882,
  protocol: {
    magic: 0x6e623063 // pchMessageStart
  },
  // vSeeds
  seedsDns: [
    'jp01.dnsseed.c0ban.com',
    'kr01.dnsseed.c0ban.com'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4, // base58Prefixes[EXT_SECRET_KEY]
      public: 0x0488b21e // base58Prefixes[EXT_PUBLIC_KEY]
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 88888, // TODO: decide cbn bip44
    private: 0x88, // base58Prefixes[SECRET_KEY]
    public: 0x12, // base58Prefixes[PUBKEY_ADDRESS]
    scripthash: 0x1c // base58Prefixes[SCRIPT_ADDRESS]
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '000000005184ffce04351e687a3965b300ee011d26b2089232cd039273be4a67',
  port: 13881,
  portRpc: 13882,
  protocol: {
    magic: 0x8e828083 // pchMessageStart
  },
  seedsDns: [
  ],
  versions: {
    bip32: {
      private: 0x04388388, // base58Prefixes[EXT_SECRET_KEY]
      public: 0x04588788 // base58Prefixes[EXT_PUBLIC_KEY]
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    private: 0xee, // base58Prefixes[SECRET_KEY]
    public: 0x76, // base58Prefixes[PUBKEY_ADDRESS]
    scripthash: 0xc6 // base58Prefixes[SCRIPT_ADDRESS]
  }
}, common)

var regtest = Object.assign({}, {
  hashGenesisBlock: '3249e44acac8fc67e6b94e882525cea6f5a9853e1ff7b4a1d5f470b23ff8ae11',
  port: 23881,
  portRpc: 23882,
  protocol: {
    magic: 0xdab5bffa // pchMessageStart
  },
  seedsDns: [
  ],
  versions: {
    bip32: {
      private: 0x043587cf, // base58Prefixes[EXT_SECRET_KEY]
      public: 0x04358394 // base58Prefixes[EXT_PUBLIC_KEY]
    },
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    bip44: 1,
    private: 0xef, // base58Prefixes[SECRET_KEY]
    public: 0x6f, // base58Prefixes[PUBKEY_ADDRESS]
    scripthash: 0xc4 // base58Prefixes[SCRIPT_ADDRESS]
  }
}, common)

module.exports = {
  main,
  test,
  regtest
}
