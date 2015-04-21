// annoyingly, this is for browserify
var coins = [
  require('./coins/blk'),
  require('./coins/btc'),
  require('./coins/dash'),
  require('./coins/doge'),
  require('./coins/gmc'),
  require('./coins/ltc'),
  require('./coins/mue'),
  require('./coins/nmc'),
  require('./coins/ppc'),
  require('./coins/rdd'),
  require('./coins/uro')
]

var supportedCoins = {}

coins.forEach(function (coin) {
  var unit = coin.main.unit.toLowerCase()
  var name = coin.main.name.toLowerCase()

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

module.exports = coininfo
