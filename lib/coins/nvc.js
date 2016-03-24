/*
  info from:
  https://github.com/novacoin-project/novacoin
  main.cpp: see unsigned char pchMessageStart[4]
  base58.h: see unnamed enum
*/

var assign = require('object-assign')

var common = {
  name: 'Novacoin',
  unit: 'NVC'
}

var main = assign({}, {
  port: 7777,
  portRpc: 8344,
  protocol: {
    magic: 0xe5e9e8e4 // careful, sent over wire as little endian
  },
  // base58Prefixes
  versions: {
    bip32: {
    },
    bip44: 0x32,
    private: 0x88,
    public: 0x08,
    scripthash: 0x14
  }
}, common)

var test = assign({}, {
  port: 17777,
  portRpc: 18344,
  protocol: {
    magic: 0xefc0f2cd
  },
  versions: {
    bip32: {
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
