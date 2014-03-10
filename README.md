coininfo
========

JavaScript component for crypto currency specific information.
 


Installation
------------

    npm install --save coininfo


Usage
-----

```js
var coininfo = require('coininfo');
console.dir(coininfo('LTC')) // => { versions: { public: 48, private: 176 } }
```

Useful to use in conjunction with [coinkey][https://github.com/cryptocoinjs/coinkey] and [coinstring][https://github.com/cryptocoinjs/coinstring].


Supported
---------

<table>
<tr><th>Crypto Coin</th><th>Public Address</th><th>Private Wallet Import Format</th></tr>
<tr><td>Bitcoin</td><td> 0x00</td><td> 0x80</td></tr>
<tr><td>Bitcoin Script Hash</td><td> 0x05</td><td> N/A</td></tr>
<tr><td>Bitcoin Testnet</td><td> 0x6E</td><td> 0xEF</td></tr>
<tr><td>Bitcoin Testnet Script Hash</td><td> 0xC4</td><td> N/A</td></tr>
<tr><td>Dogecoin</td><td> 0x1E</td><td> 0x9E</td></tr>
<tr><td>Litecoin</td><td> 0x30</td><td> 0xB0</td></tr>
<tr><td>Namecoin</td><td> 0x34</td><td> 0xB4</td></tr>
</table>





