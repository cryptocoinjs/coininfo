var Buffer = require('safe-buffer').Buffer

// annoyingly, this is for browserify
var coins = [
  require('./coins/bch'),
  require('./coins/blk'),
  require('./coins/btc'),
  require('./coins/btg'),
  require('./coins/cbn'),
  require('./coins/city'),
  require('./coins/dash'),
  require('./coins/dnr'),
  require('./coins/dcr'),
  require('./coins/dgb'),
  require('./coins/doge'),
  require('./coins/grs'),
  require('./coins/ltc'),
  require('./coins/via'),
  require('./coins/mona'),
  require('./coins/nbt'),
  require('./coins/nmc'),
  require('./coins/ppc'),
  require('./coins/qtum'),
  require('./coins/rvn'),
  require('./coins/rdd'),
  require('./coins/vtc'),
  require('./coins/x42'),
  require('./coins/zec')
]

var supportedCoins = {}

coins.forEach(function (coin) {
  var unit = coin.main.unit.toLowerCase()
  var name = coin.main.name.toLowerCase()

  coin.main.testnet = false
  coin.main.toBitcoinJS = toBitcoinJS.bind(coin.main)
  coin.main.toBitcore = toBitcore.bind(coin.main)
  supportedCoins[unit] = coin.main
  supportedCoins[name] = coin.main

  if (coin.test) {
    coin.test.testnet = true
    coin.test.toBitcoinJS = toBitcoinJS.bind(coin.test)
    coin.test.toBitcore = toBitcore.bind(coin.test)
    supportedCoins[unit + '-test'] = coin.test
    supportedCoins[name + '-test'] = coin.test
  }

  if (coin.regtest) {
    coin.regtest.testnet = true
    coin.regtest.toBitcoinJS = toBitcoinJS.bind(coin.regtest)
    coin.regtest.toBitcore = toBitcore.bind(coin.regtest)
    supportedCoins[unit + '-regtest'] = coin.regtest
    supportedCoins[name + '-regtest'] = coin.regtest
  }

  if (coin.simnet) {
    coin.simnet.testnet = true
    coin.simnet.toBitcoinJS = toBitcoinJS.bind(coin.simnet)
    coin.simnet.toBitcore = toBitcore.bind(coin.simnet)
    supportedCoins[unit + '-simnet'] = coin.simnet
    supportedCoins[name + '-simnet'] = coin.simnet
  }
})

function coininfo (input) {
  var coin = input.toLowerCase()

  if (!(coin in supportedCoins)) {
    return null
  } else {
    return supportedCoins[coin]
  }
}

coins.forEach(function (coin) {
  coininfo[coin.main.name.toLowerCase()] = coin
})

function toBitcoinJS () {
  return Object.assign({}, this, {
    messagePrefix: this.messagePrefix || ('\x19' + this.name + ' Signed Message:\n'),
    bech32: this.bech32,
    bip32: {
      public: (this.versions.bip32 || {}).public,
      private: (this.versions.bip32 || {}).private
    },
    pubKeyHash: this.versions.public,
    scriptHash: this.versions.scripthash,
    wif: this.versions.private,
    dustThreshold: null // TODO
  })
}

function toBitcore () {
  // reverse magic
  var nm = Buffer.allocUnsafe(4)
  nm.writeUInt32BE(this.protocol ? this.protocol.magic : 0, 0)
  nm = nm.readUInt32LE(0)

  return Object.assign({}, this, {
    name: this.testnet ? 'testnet' : 'livenet',
    alias: this.testnet ? 'testnet' : 'mainnet',
    pubkeyhash: this.versions.public,
    privatekey: this.versions.private,
    scripthash: this.versions.scripthash,
    xpubkey: (this.versions.bip32 || {}).public,
    xprivkey: (this.versions.bip32 || {}).private,
    networkMagic: nm,
    port: this.port,
    dnsSeeds: this.seedsDns || []
  })
}

module.exports = coininfo
