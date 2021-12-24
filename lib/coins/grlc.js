// https://github.com/GarlicoinOrg/Garlicoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Garlicoin',
  unit: 'GRLC',
};

var main = Object.assign({}, {
  hashGenesisBlock: '2ada80bf415a89358d697569c96eb98cdbf4c3b8878ac5722c01284492e27228',
  port: 42069,
  protocol: {
    magic: 0xdbb6c6d2
  },
  bech32: 'grlc',
  seedsDns: [
    'dnsseed.rshaw.space', 
    'dnsseed.garli.co.in'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 69420,
    private: 0xb0,
    public: 0x26,
    scripthash: 0x32
  }
}, common);

var test = Object.assign({}, {
  hashGenesisBlock: 'b25004ec2dc27689999f9ee14856ee0464d7f73f3fae3cf43c1d40f89c141aea',
  port: 42075,
  protocol: {
    magic: 0xf2c8d2fd
  },
  bech32: 'tgrlc',
  seedsDns: [
    'dnsseed-testnet.rshaw.space'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0x3a
  }
}, common);

module.exports = {
  main,
  test
};
