# modify-keys [![Build Status](https://travis-ci.org/sindresorhus/modify-keys.svg?branch=master)](https://travis-ci.org/sindresorhus/modify-keys)

> Modify the keys of an object


## Install

```
$ npm install --save modify-keys
```


## Usage

```js
var modifyKeys = require('modify-keys');

modifyKeys({FOO: true, bAr: false}, function (key, value) {
	return key.toLowerCase();
});
//=> {foo: true, bar: false}
```


## API

### modifyKeys(input, modifier)

Modifies the keys and returns a new object.

#### input

*Required*  
Type: `object`

#### modifier(key, value)

*Required*  
Type: `function`

Gets the key and value for each item and is expected to return the new key.


## Related

See [`modify-values`](https://github.com/sindresorhus/modify-values) for modifying the values of an object.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
