/*
  info from:
    https://github.com/BTHPOS/BTH/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Bithereum',
  unit: 'BTH'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 18553,
  protocol: {
    // pchMessageStart
    magic: 0x446d47e1 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'us-dnsseed.bithereum.network',
    'eu-dnsseed.bithereum.network',
    'sg-dnsseed.bithereum.network'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 156,
    private: 0x80, // 128
    public: 0x19, // 25
    scripthash: 0x28 // 40
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '0x00000000e0781ebe24b91eedc293adfea2f557b53ec379e78959de3853e6f9f6',
  port: 19553,
  portRpc: 19554,
  protocol: {
    magic: 0x456e48e2
  },
  seedsDns: [
    'us-testnet-dnsseed.bithereum.network',
    'eu-testnet-dnsseed.bithereum.network',
    'sg-testnet-dnsseed.bithereum.network'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 156,
    private: 0xef, // 239
    public: 0x41, // 111
    scripthash: 0x3F // 196
  }
}, common)

module.exports = {
  main: main,
  test: test
}
