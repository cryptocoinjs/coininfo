5.1.0 / 2019-05-31
------------------

- add Ravencoin (#87)

5.0.0 / 2019-05-28
------------------

- Switch Digibyte scripthash version byte. The obsolete `0x03` byte is now `scripthash2`, and the newer `0x3f` (S-addresses) byte is the default.

4.5.0 / 2019-04-30
------------------

- add bech32 prefixes (#85)

4.4.1 / 2019-04-08
------------------

- update DNS seed for BTC (#84)

4.4.0 / 2019-02-15
------------------

- add bip32 for LTC (#64)
- add field messagePrefix (#65)
- fix undefined bip32 error (#66)
- fix Peercoin values (#79)

4.3.0 / 2018-08-15
------------------

- add Viacoin

4.2.0 / 2018-08-10
------------------

- add testnet for Bitcoin Cash

4.1.0 / 2018-07-31
------------------

- add `scripthash2` for DGB S... addresses

4.0.1 / 2018-06-22
------------------

- add BIP32 data for Zcash

4.0.0 / 2018-03-05
------------------
- change BIP44 constant for QTUM

3.2.0 / 2018-01-16
------------------

- add DigiByte

3.1.0 / 2018-01-10
------------------
- add QTUM

3.0.0 / 2018-01-10
------------------
- fix monacoin WIF constant

2.2.0 / 2017-12-29
------------------
- add BTG support

2.1.0 / 2017-12-28
------------------
- add VTC support

1.0.0 / 2017-04-23
-------------------
- change LTC P2SH

0.10.0 / 2017-04-09
-------------------
- add DCR
- move from Mocha to Tape

0.9.1 / 2017-03-23
-------------------
- update Dash constants

0.9.0 / 2016-09-22
------------------
- added `hashGenesisBlock`

0.8.2 / 2016-03-17
------------------
- added Dash protocol magic

0.8.1 / 2016-02-04
------------------
- fix for use with Node v0.10. See: https://github.com/cryptocoinjs/coininfo/pull/17

0.8.0 / 2016-01-29
------------------
- added `nubits`
- added bitcoin `regtest`
- fixed bitcoin rpc ports

0.7.0 / 2016-01-27
------------------
- deleted `mue`
- deleted 'uro'
- deleted `gmc`
- added `toBitcoinJS()` for [`bitcoinjs-lib`](https://github.com/bitcoinjs/bitcoinjs-lib) support
- added `toBitcore()` for Bitpay's bitcore suppport
- add DOGE / LTC seeds / port

0.6.0 / 2016-01-07
------------------
- fixed DASH info, See: https://github.com/cryptocoinjs/coininfo/pull/13

0.5.0 / 2015-05-11
------------------
- added bip44 constants from http://doc.satoshilabs.com/slips/slip-0044.html

0.4.0 / 2015-04-21
------------------
- added missing formal names for some coins
- added support for full coin name passed into `coininfo()`, i.e. can do `coininfo('BTC')` or `coininfo('bitcoin')`
- access coin info via property
- added DASH

0.3.1 / 2015-01-05
------------------
- bugfix for browserify

0.3.0 / 2015-01-03
------------------
- added more information like network information

0.2.3 / 2014-12-28
------------------
- added BlackCoin

0.2.2 / 2014-10-26
------------------
- added Gamerscoin https://github.com/cryptocoinjs/coininfo/pull/10

0.2.1 / 2014-08-13
------------------
- added [RDD](https://github.com/cryptocoinjs/coininfo/pull/7)

0.2.0  / 2014-06-16
-------------------
* removed backwards compatibility code, use npm versions instead [ralphtheninja](https://github.com/cryptocoinjs/coininfo/pull/3)
* removed semicolons per http://cryptocoinjs.com/about/contributing/#semicolons
* added `PPC` and `URO` support: [#4](https://github.com/cryptocoinjs/coininfo/issues/4), [#6](https://github.com/cryptocoinjs/coininfo/pull/6)
* added bip32 support
* removed `terst` dev dep for `assert`

0.1.0 / 2014-04-14
------------------
* added `scripthash` for each coin, #2

0.0.2 / 2014-04-09
------------------
* add Dogecoin Testnet

0.0.1 / 2014-03-10
------------------
* initial release
