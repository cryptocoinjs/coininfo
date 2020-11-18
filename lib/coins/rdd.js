var common = {
  name: 'ReddCoin',
  unit: 'RDD'
}

var main = Object.assign({}, {
  hashGenesisBlock: 'b868e0d95a3c3c0e0dadc67ee587aaf9dc8acbf99e3b4b3110fad4eb74c1decc',
  versions: {
    bip44: 4,
    private: 0xbd,
    public: 0x3d,
    scripthash: 0x05
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: 'a12ac9bd4cd26262c53a6277aafc61fe9dfe1e2b05eaa1ca148a5be8b394e35a',
  versions: {
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
