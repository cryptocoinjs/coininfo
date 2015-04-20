var util = require('../util')

var common = {
  name: 'ReddCoin',
  unit: 'RDD'
}

var main = util.assign({
  versions: {
    private: 0xbd,
    public: 0x3d,
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
