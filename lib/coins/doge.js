var util = require('../util')

var common = {
  name: 'Dogecoin',
  unit: 'Doge'
}

var main = util.assign({
  versions: {
    bip32: {
      private: 0x02fac398,
      public: 0x02facafd
    },
    private: 0x9e,
    public: 0x1e,
    scripthash: 0x16
  }
}, common)

var test = util.assign({
  versions: {
    private: 0xf1,
    public: 0x71,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
