/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var util = require('../util')

var common = {
  name: 'Bitcoin',
  per1: 1e8,
  unit: 'BTC'
}

var main = util.assign({
  // nDefaultPort
  port: 8333, 
  portRpc: 8334,
  protocol: {
    // pchMessageStart
    magic: 0xd9b4bef9 //careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    "seed.bitcoin.sipa.be",
    "dnsseed.bluematt.me",
    "dnsseed.bitcoin.dashjr.org",
    "seed.bitcoinstats.com",
    "seed.bitnodes.io",
    "bitseed.xf2.org",
    "seeds.bitcoin.open-nodes.org"
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    }
    private: 0x80,
    public: 0x00,
    scripthash: 0x05
  }
}, common)

var test = util.assign({
  port: 18333,
  portRpc: 18334,
  protocol: {
    magic: 0x0709110b
  },
  seedsDns: [
    "testnet-seed.alexykot.me",
    "testnet-seed.bitcoin.schildbach.de",
    "testnet-seed.bitcoin.petertodd.org",
    "testnet-seed.bluematt.me"
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    }
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}
