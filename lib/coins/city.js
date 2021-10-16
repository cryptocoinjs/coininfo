var common = {
  name: 'CityCoin',
  isProofOfStake: true
}

var main = Object.assign({}, {
  unit: 'CITY',
  hashGenesisBlock: '00000b0517068e602ed5279c20168cfa1e69884ee4e784909652da34c361bff2',
  port: 4333,
  portRpc: 4334,
  protocol: {
    magic: 0x43545901
  },
  seedsDns: [
    'seed.city-chain.org',
    'seed.city-coin.org',
    'seed.citychain.foundation',
    'seed.liberstad.com'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 1926,
    private: 0xed,
    public: 0x1c,
    scripthash: 0x58
  }
}, common)

var test = Object.assign({}, {
  unit: 'TCITY',
  hashGenesisBlock: '00077765f625cc2cb6266544ff7d5a462f25be14ea1116dc2bd2fec17e40a5e3',
  port: 24333,
  portRpc: 24334,
  protocol: {
    magic: 0x43545401
  },
  seedsDns: [
    'testseed.city-chain.org',
    'testseed.city-coin.org',
    'testseed.citychain.foundation'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 1926,
    private: 0xc2,
    public: 0x42,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main,
  test
}
