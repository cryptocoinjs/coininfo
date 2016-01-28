var assign = require('object-assign')

var common = {
  name: 'Peercoin',
  unit: 'PPC'
}

var main = assign({}, {
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
