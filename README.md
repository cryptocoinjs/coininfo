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
console.dir(coininfo('LTC')) // => { versions: { public: 48, private: 176, scripthash: 5} }
```

Useful to use in conjunction with [coinkey](https://github.com/cryptocoinjs/coinkey) and [coinstring](https://github.com/cryptocoinjs/coinstring).


Supported
---------

<table>
<tr>
  <th> Crypto Coin </th><th> Public Address </th><th> Private Wallet Import Format </th><th> Script Hash </th>
</tr>

<tr>
  <td> BTC </td><td> 0x00 </td><td> 0x80 </td><td> 0x05 </td>
</tr>
<tr>
  <td> BTC-TEST </td><td> 0x6F </td><td> 0xEF </td><td> 0xC4 </td>
</tr>

<tr>
  <td> DOGE </td><td> 0x1E </td><td> 0x9E </td><td> 0x16 </td>
</tr>
<tr>
  <td> DOGE-TEST </td><td> 0x71 </td><td> 0xF1 </td><td> 0xC4 </td>
</tr>


<tr>
  <td> LTC </td><td> 0x30 </td><td> 0xB0 </td><td> 0x05 </td>
</tr>
<tr>
  <td> LTC-TEST </td><td> 0x6F </td><td> 0xEF </td><td> 0xC4 </td>
</tr>


<tr>
  <td> NMC </td><td> 0x34 </td><td> 0xB4 </td><td> 0x05 </td>
</tr>

</table>





