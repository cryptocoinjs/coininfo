var util = require('../util')

var common = {
  name: 'GamerCredits',
  unit: 'GMC'
}

var main = util.assign({
  versions: {
    bip32: {
      private: 0x019d9cfe,
      public: 0x019da462
    },
    private: 0xa6,
    public: 0x26,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main,
  test: null
}
