/*
Info From;
https://github.com/unobtanium-official/Unobtanium/blob/master/src/chainparams.cpp
https://github.com/satoshilabs/slips/blob/master/slip-0044.md

Unobtanium messagePrefix is:
messagePrefix = "\x1bUnobtanium Signed Message:\n"
*/

var common = {
  name: 'Unobtanium',
  unit: 'Uno'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000004c2fc5fffb810dccc197d603690099a68305232e552d96ccbe8e2c52b75',
  port: 65534,
  protocol: {
    magic: 0x03d5b503
  },
  seedsDns: [
    'node1.unobtanium.uno',
    'node2.unobtanium.uno'
  ],
  versions: {
    bip32: {
      private: 0x0488B21E,
      public: 0x0488ADE4
    },
    bip44: 0x5c,
    private: 0xE0,
    public: 0x82,
    scripthash: 0x1E
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '000007b02afb00ae826d948d88f4973c00073425f965917f6298b6d280bde021',
  port: 65522,
  protocol: {
    magic: 0x01020304
  },
  seedsDns: [
    'testnet.unobtanium.uno'
  ],
  versions: {
    bip32: {
      private: 0x043586CE,
      public: 0x04358293
    },
    bip44: 1,
    private: 0xEF,
    public: 0x44,
    scripthash: 0x1E
  }
}, common)

module.exports = {
  main,
  test
}
