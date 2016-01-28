// annoyingly, this is for browserify
var coins = [
  require('./coins/blk'),
  require('./coins/btc'),
  require('./coins/dash'),
  require('./coins/doge'),
  require('./coins/ltc'),
  require('./coins/nmc'),
  require('./coins/ppc'),
  require('./coins/rdd')
]

var supportedCoins = {}

coins.forEach(function (coin) {
  var unit = coin.main.unit.toLowerCase()
  var name = coin.main.name.toLowerCase()

  coin.main.toBitcoinJS = toBitcoinJS.bind(coin.main)

  supportedCoins[unit] = coin.main
  supportedCoins[name] = coin.main
  if (coin.test) {
    supportedCoins[unit + '-test'] = coin.test
    supportedCoins[name + '-test'] = coin.test
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
    messagePrefix: null, // TODO
    bip32: {
      public: this.versions.bip32.public,
      private: this.versions.bip32.private
    },
    pubKeyHash: this.versions.public,
    scriptHash: this.versions.scripthash,
    wif: this.versions.private,
    dustThreshold: null // TODO
  })
}

module.exports = coininfo
