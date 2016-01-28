var assign = require('object-assign')

// https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Dogecoin',
  unit: 'DOGE'
}

var main = assign({}, {
  port: 22556,
  protocol: {
    magic: 0xc0c0c0c0
  },
  seedsDns: [
    'seed.dogecoin.com',
    'seed.multidoge.org',
    'seed2.multidoge.org',
    'seed.doger.dogecoin.com'
  ],
  versions: {
    bip32: {
      private: 0x02fac398,
      public: 0x02facafd
    },
    bip44: 3,
    private: 0x9e,
    public: 0x1e,
    scripthash: 0x16
  }
}, common)

var test = assign({}, {
  versions: {
    bip44: 1,
    private: 0xf1,
    public: 0x71,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
