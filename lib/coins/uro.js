var util = require('../util')

var common = {
  unit: 'URO'
}

var main = util.assign({
  versions: {
    private: 0xc4,
    public: 0x44,
    scripthash: 0x05
  }
}, common)

var test = util.assign({
  versions: {
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
