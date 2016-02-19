var assign = require('object-assign')
var bip44Constants = require('bip44-constants')

var common = {
  name: 'Peercoin',
  unit: 'PPC'
}

var main = assign({}, {
  versions: {
    bip44: bip44Constants.Peercoin - 0x80000000,
    private: 0xc4,
    public: 0x44,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main,
  test: null
}
