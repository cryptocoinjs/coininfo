var assign = require('object-assign')

var common = {
  name: 'Namecoin',
  unit: 'NMC'
}

var main = assign({}, {
  versions: {
    // http://doc.satoshilabs.com/slips/slip-0044.html
    bip44: 7,
    private: 0xb4,
    public: 0x34,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main,
  test: null
}
