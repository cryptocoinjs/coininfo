var test = require('tape')
var ci = require('../')

test('+ coininfo()', function (t) {
  t.test('iterate all coins', function (t) {
    var coins = [
      'bch',
      'blk',
      'btc', 'btc-test',
      'doge', 'doge-test',
      'ltc', 'ltc-test',
      'nbt',
      'nmc',
      'ppc',
      'rdd', 'rdd-test',
      'mona', 'mona-test'
    ]

    coins.forEach(function (c) {
      t.ok(ci(c).versions.scripthash, 'should return valid data for ' + c)
    })

    t.end()
  })

  t.test('versions', function (t) {
    t.test('should return the version', function (t) {
      var v = ci('LTC').versions
      t.equal(v.public, 0x30)
      t.equal(v.private, 0xB0)
      t.end()
    })

    t.test('should return bip32', function (t) {
      var v = ci('BTC-TEST').versions.bip32
      t.equal(v.public, 0x043587cf)
      t.equal(v.private, 0x04358394)
      t.end()
    })

    t.test('> when does not have bip32', function (t) {
      var v = ci('PPC').versions.bip32
      t.notok(v, 'should return null')
      t.end()
    })

    t.test('> when full formal coin name is passed', function (t) {
      t.ok(ci('bitcoin'), 'should return coin info')
      t.end()
    })

    t.end()
  })

  t.test('> when coin not found', function (t) {
    var info = ci('XXX')
    t.equal(info, null, 'should return null')
    t.end()
  })

  t.test('> when accessing through property', function (t) {
    var bitcoin = ci.bitcoin
    t.equal(bitcoin.main.versions.public, 0)
    t.equal(bitcoin.test.versions.public, 0x6f)
    t.end()
  })

  t.test('toBitcoinJS()', function (t) {
    var bitcoin = ci.bitcoin.main
    var bjsBitcoin = bitcoin.toBitcoinJS()
    t.equal(bjsBitcoin.wif, 0x80, 'should return a compatible bitcoinjs-lib')
    t.end()
  })

  t.test('toBitcore()', function (t) {
    // should return a compatible Bitpay bitcore
    var bitcoin = ci.bitcoin.main
    var bjsBitcore = bitcoin.toBitcore()
    t.equal(bjsBitcore.privatekey, 0x80)
    t.equal(bjsBitcore.networkMagic, 0xf9beb4d9)
    t.true(bjsBitcore.dnsSeeds.length > 0)
    t.end()
  })

  t.end()
})
