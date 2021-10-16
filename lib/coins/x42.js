var common = {
  name: 'x42',
  isProofOfStake: true
}

var main = Object.assign({}, {
  unit: 'x42',
  hashGenesisBlock: '04ffe583707a96c1c2eb54af33a4b1dc6d9d8e09fea8c9a7b097ba88f0cb64c4',
  port: 52342,
  portRpc: 52343,
  protocol: {
    magic: 0x3526642
  },
  seedsDns: [
    'mainnet1.x42seed.host',
    'mainnetnode1.x42seed.host',
    'tech.x42.cloud',
    'x42.seed.blockcore.net'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 424242,
    private: 0xcb,
    public: 0x4b,
    scripthash: 0x7d
  }
}, common)

var test = Object.assign({}, {
  unit: 'Tx42',
  hashGenesisBlock: 'a92bf124a1e6f237015440d5f1e1999bdef8e321f2d3fdc367eb2f7733b17854',
  port: 62342,
  portRpc: 62343,
  protocol: {
    magic: 0x4526642
  },
  seedsDns: [
    'testnet1.x42seed.host'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 424242,
    private: 0xc1,
    public: 0x41,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main,
  test
}
