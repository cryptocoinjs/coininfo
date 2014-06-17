var assert = require('assert')
var ci = require('../')


describe('+ coininfo()', function() {
  it('should return the version', function() {
    var v = ci("LTC").versions
    assert.equal(v.public, 0x30)
    assert.equal(v.private, 0xB0)
  })

  it('should return bip32', function() {
    var v = ci('BTC-TEST').versions.bip32
    assert.equal(v.public, 0x043587cf)
    assert.equal(v.private, 0x04358394)
  })

  describe('> when does not have bip32', function() {
    it('should return null', function() {
      var v = ci('PPC').versions.bip32
    })
  })
})