var ci = require('../')

require('terst');

describe('+ coininfo()', function() {
  it('should return the version', function() {
    var v = ci("LTC").versions;
    EQ (v.public, 0x30);
    EQ (v.private, 0xB0);
  })
})