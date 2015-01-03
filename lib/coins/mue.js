var util = require('../util')

var common = {
  unit: 'MUE'
}

var main = util.assign({
  versions: {
    private: 0x8f,
    public: 0x0f,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main,
  test: null
}
