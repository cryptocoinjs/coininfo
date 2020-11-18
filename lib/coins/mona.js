// https://github.com/monacoinproject/monacoin/blob/master-0.13/src/chainparams.cpp

var common = {
  name: 'Monacoin',
  unit: 'MONA'
}

var main = Object.assign({}, {
  hashGenesisBlock: 'ff9f1c0116d19de7c9963845e129f9ed1bfc0b376eb54fd7afa42e0d418c8bb6',
  port: 9401,
  portRpc: 9402,
  protocol: {
    magic: 0xdbb6c0fb
  },
  bech32: 'mona',
  seedsDns: [
    'dnsseed.monacoin.org'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 22,
    private: 0xb0,
    private2: 0xb2, // old wif
    public: 0x32,
    scripthash: 0x37,
    scripthash2: 0x05 // old '3' prefix. available for backward compatibility.
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: 'a2b106ceba3be0c6d097b2a6a6aacf9d638ba8258ae478158f449c321061e0b2',
  port: 19403,
  portRpc: 19402,
  protocol: {
    magic: 0xf1c8d2fd
  },
  bech32: 'tmona',
  seedsDns: [
    'testnet-dnsseed.monacoin.org'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0x75,
    scripthash2: 0xc4
  }
}, common)

module.exports = {
  main,
  test
}
