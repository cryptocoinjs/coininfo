/*
  info from:
    https://github.com/feirm/feirm/blob/master/src/chainparams.cpp
*/

var common = {
  name: "Feirm",
  per1: 1e8,
  unit: "XFE",
  messagePrefix: "\x18DarkNet Signed Message:\n"
};

var main = Object.assign(
  {},
  {
    hashGenesisBlock:
      "00000d2a3b1462b52b6f016a839aac1ffb8c015a161b74299076eb144cb33526",
    // nDefaultPort
    port: 4919,
    portRpc: 4917,
    protocol: {
      // pchMessageStart
      magic: 0x9fa4fb4d // careful, sent over wire as little endian
    },
    // vSeeds
    seedsDns: [
      "seed1.feirm.com",
      "seed2.feirm.com",
      "seed3.feirm.com",
      "seed4.feirm.com"
    ],
    // base58Prefixes
    versions: {
      bip32: {
        private: 0x0488ade4,
        public: 0x0488b21e
      },
      bip44: 193,
      private: 0x37,
      public: 0xc,
      scripthash: 0x39
    }
  },
  common
);

var test = Object.assign(
  {},
  {
    hashGenesisBlock:
      "00000d2a3b1462b52b6f016a839aac1ffb8c015a161b74299076eb144cb33526",
    // nDefaultPort
    port: 34913,
    protocol: {
      // pchMessageStart
      magic: 0x5cbb1a33 // careful, sent over wire as little endian
    },
    // base58Prefixes
    versions: {
      bip32: {
        private: 0x04358394,
        public: 0x043587cf
      },
      bip44: 0,
      private: 0x6c,
      public: 0x62,
      scripthash: 0xc
    }
  },
  common
);

module.exports = {
  main: main,
  test: test
};
