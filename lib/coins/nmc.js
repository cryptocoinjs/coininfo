var util = require('../util')

var common = {
  name: 'Namecoin',
  unit: 'NMC'
}

var main = util.assign({
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
