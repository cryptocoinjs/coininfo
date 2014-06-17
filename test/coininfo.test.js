var ci = require('../')

require('terst')

describe('+ coininfo()', function() {
  it('should return the version', function() {
    var v = ci("LTC").versions
    EQ (v.public, 0x30)
    EQ (v.private, 0xB0)
  })

  it('should return bip32', function() {
    var v = ci('BTC-TEST').versions.bip32
    EQ (v.public, 0x043587cf)
    EQ (v.private, 0x04358394)
  })

  describe('> when does not have bip32', function() {
    it('should return null', function() {
      var v = ci('PPC').versions.bip32
    })
  })
})