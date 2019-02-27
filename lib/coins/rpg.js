/*
  info from:
    https://github.com/RPGCoin/RPG-Core/blob/master/src/chainparams.cpp
*/

var common = {
    name: 'RPGCoin',
    unit: 'RPG'
  }
  
  var main = Object.assign({}, {
    hashGenesisBlock: '0x000000dea116580241cbab013d573f53c267bdd691c08a87b74468e9fb6703ac',
    // nDefaultPort
    port: 7210,
    portRpc: 7214,
    protocol: {
      // pchMessageStart
      magic: 0x3b7ca3c7 // careful, sent over wire as little endian
    },
    // vSeeds
    seedsDns: [
      'dns1.rpgcoin.gg',
      'ec2-18-188-230-37.us-east-2.compute.amazonaws.com'
    ],
    // base58Prefixes
    versions: {
      bip32: {
        private: 0x05347eac,
        public: 0x0534e7ca
      },
      bip44: 175,
      private: 0x80,
      public: 0x3c,
      scripthash: 0x7a
    }
  }, common)
  
  var test = Object.assign({}, {
    hashGenesisBlock: '0x0000006d3259de07d5267a8bdfea602f155af7b6bd03ddff6ad6b4881e191daf',
    port: 17210,
    portRpc: 17214,
    protocol: {
      magic: 0x547A9374
    },
    seedsDns: [
      'dns2.rpgcoin.gg'      
    ],
    versions: {
      bip32: {
        private: 0x04358396,
        public: 0x043587ce
      },
      bip44: 175,
      private: 0xef,
      public: 0x6f,
      scripthash: 0xc4
    }
  }, common)
  
  module.exports = {
    main: main,
    test: test
  }
