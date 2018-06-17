/*
  info from:
    https://github.com/muecoin/MUECore/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'MonetaryUnit',
  unit: 'MUE'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000002acd994a815401fbaae0e52404b32857efd0b7b0c77b8e0715ccdd6d437',
  // nDefaultPort
  port: 19683,
  portRpc: 19682,
  protocol: {
    magic: 0xa7cdccb5 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'nodes.muex.io',
    'nodes.monetaryunit.org',
    'nodes.mymue.com',
    'nodes.cryptophi.com'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 5,
    private: 0x7e,
    public: 0x10,
    scripthash: 0x4c
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '00000c4e1485ee323e0dfab3c8afa871ceceff8822b9abe68005e22576d47a6f',
  port: 18683,
  portRpc: 18682,
  seedsDns: [
    'tnodes.muex.io'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0x40,
    public: 0x26,
    scripthash: 0x13
  }
}, common)

module.exports = {
  main: main,
  test: test
}
