// https://github.com/carsenk/denarius/blob/master/src/main.cpp

var common = {
  name: 'Denarius',
  unit: 'DNR'
}

var main = Object.assign({}, {
  hashGenesisBlock: '00000d5dbbda01621cfc16bbc1f9bf3264d641a5dbf0de89fd0182c2c4828fcd',
  port: 33339,
  portRpc: 32339,
  protocol: {
    magic: 0xb4eff2fa
  },
  seedsDns: [
    'denariusexplorer.org',
    'denarius.host',
    'denarius.tech',
    'denarius.network'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 116,
    private: 0x9e,
    public: 0x1e,
    scripthash: 0x5a
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '000086bfe8264d241f7f8e5393f747784b8ca2aa98bdd066278d590462a4fdb4',
  versions: {
    bip44: 1,
    private: 0x8c,
    public: 0x12,
    scripthash: 0x74
  }
}, common)

module.exports = {
  main,
  test
}
