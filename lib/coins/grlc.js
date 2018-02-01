// https://github.com/GarlicoinOrg/Garlicoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Garlicoin',
  unit: 'GRLC'
}

var main = Object.assign({}, {
  hashGenesisBlock: '2ada80bf415a89358d697569c96eb98cdbf4c3b8878ac5722c01284492e27228',
  port: 42069,
  protocol: {
    magic: 0xd2c6b6db
  },
  seedsDns: [
    'dnsseed.brennanmcdonald.io',
    'dnsseed.rshaw.space'
  ],
  versions: {
    bip32: {
      private: 0x0488ADE4,
      public: 0x0488B21E
    },
    // bip44: 1, // Doesn't have one yet
    private: 0xB0,
    public: 0x26,
    scripthash: 0x5,
    scripthash2: 0x32
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '8075c771ed8b495ffd943980a95f702ab34fce3c8c54e379548bda33cc8c0573',
  versions: {
    // bip44: 1, // Doesn't have one yet
    private: 0xEF,
    public: 0x6F,
    scripthash: 0xC4,
    scripthash2: 0x3A
  }
}, common)

module.exports = {
  main: main,
  test: test
}
