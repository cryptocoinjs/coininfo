var util = require('../util')

var common = {
  name: 'Peercoin',
  unit: 'PPC'
}

var main = util.assign({
  versions: {
    bip44: 6,
    private: 0xc4,
    public: 0x44,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main,
  test: null
}
