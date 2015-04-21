coininfo
========

JavaScript component for crypto currency specific information such as version numbers, DNS seeds, etc. Works in Node.js and the browser.

**Official documentation:**

http://cryptocoinjs.com/modules/currency/coininfo/


Installation
------------

    npm i --save coininfo


Usage
-----

```js
var coininfo = require('coininfo')
console.dir(coininfo('LTC')) //use LTC-TEST for testnet
// =>
/*
{ versions:
   { public: 48,
     private: 176,
     scripthash: 5,
     bip32: { public: 27108450, private: 27106558 } } }
*/
```

Could also:

```js
var litecoin = coininfo.litecoin.main
var litecoinTest = coininfo.litecoin.test
```

Useful to use in conjunction with [coinkey](https://github.com/cryptocoinjs/coinkey) and [coinstring](https://github.com/cryptocoinjs/coinstring).


Pull requests?
--------------

Follow the canonical example:

https://github.com/cryptocoinjs/coininfo/blob/master/lib/coins/btc.js


License
-------

MIT




