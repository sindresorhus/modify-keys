# modify-keys [![Build Status](https://travis-ci.org/sindresorhus/modify-keys.svg?branch=master)](https://travis-ci.org/sindresorhus/modify-keys)

> Modify the keys of an object


## Install

```
$ npm install modify-keys
```


## Usage

```js
const modifyKeys = require('modify-keys');

modifyKeys({FOO: true, bAr: false}, (key, value) => key.toLowerCase());
//=> {foo: true, bar: false}
```


## API

### modifyKeys(input, transformer)

Modifies the keys and returns a new object.

#### input

Type: `Object`

#### transformer(key, value)

Type: `Function`

Gets the key and value for each item and is expected to return the new key.


## Related

See [`modify-values`](https://github.com/sindresorhus/modify-values) for modifying the values of an object.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
