var assign = require('object-assign')

var common = {
  name: 'Namecoin',
  unit: 'NMC'
}

var main = assign({}, {
  hashGenesisBlock: '000000000062b72c5e2ceb45fbc8587e807c155b0da735e6483dfba2f0a9c770',
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
