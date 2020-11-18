var common = {
  name: 'NuBits',
  per1: 1e6,
  unit: 'NBT'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000003cc2da5a0a289ad0a590c20a8b975219ddc1204efd169e947dd4cbad73f',
  // nDefaultPort
  port: 7890,
  portRpc: 14002,
  protocol: {
    // pchMessageStart
    magic: 0xd9b4bef9 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 12,
    private: 0x96,
    public: 0x19,
    scripthash: 0x1a
  }
}, common)

module.exports = {
  main
}
