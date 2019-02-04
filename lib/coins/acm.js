// https://github.com/Actinium-project/Actinium-ng/blob/master/src/chainparams.cpp

var common = {
  name: 'Actinium',
  unit: 'ACM'
}

var main = Object.assign({}, {
  hashGenesisBlock: '28d77872e23714562f49a1be792c276623c1bbe3fdcf21b6035cfde78b00b824',
  port: 4334,
  protocol: {
    magic: 0xfac1b7d7
  },
  seedsDns: [
    'seeder1.shit.supply',
    'seeder2.shit.supply',
    'seeder3.shit.supply',
    'seeder4.shit.supply'
  ],
  versions: {
    bip32: {
      private: 0x019d9cfe,
      public: 0x019da462
    },
    bip44: 228,
    private: 0xb5,
    public: 0x35,
    scripthash: 0x37,
    scripthash2: 0x05 // old '3' prefix. available for backward compatibility.
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '7c617cc84dc2bff1497836216d6b850cc4e871359ab1afc2d19ef099f9f81f1b',
  versions: {
    bip32: {
      private: 0x0436ef7d,
      public: 0x0436f6e1
    },
    bip44: 1,
    private: 0xab,
    public: 0x2b,
    scripthash: 0x3a,
    scripthash2: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
