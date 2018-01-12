/*
  info from:
    https://github.com/AXErunners/axe/blob/master/src/base58.h
*/

var common = {
  name: 'Axecoin',
  unit: 'AXE'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0x00000848c4c426413b0a42d4d127085f903670f51aca7b177d2c004867bc50af',
  port: 29057,
  portRpc: 29058,
  protocol: {
  },
  versions: {
    bip44: 4242,
    private: 0xCB,
    public: 0x4B,
    scripthash: 0x55
  }
}, common)

module.exports = {
  main: main
}
