var assign = require('object-assign')
var bip44Constants = require('bip44-constants')

var common = {
  name: 'Namecoin',
  unit: 'NMC'
}

var main = assign({}, {
  versions: {
    bip44: bip44Constants.Namecoin - 0x80000000,
    private: 0xb4,
    public: 0x34,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main,
  test: null
}
