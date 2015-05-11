var util = require('../util')

var common = {
  name: 'Dogecoin',
  unit: 'DOGE'
}

var main = util.assign({
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

var test = util.assign({
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
