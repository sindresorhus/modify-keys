# modify-keys

> Modify the keys of an object

## Install

```sh
npm install modify-keys
```

## Usage

```js
import modifyKeys from 'modify-keys';

modifyKeys({FOO: true, bAr: false}, (key, value) => key.toLowerCase());
//=> {foo: true, bar: false}
```

## API

### modifyKeys(input, transformer)

Modifies the keys and returns a new object.

#### input

Type: `object`

#### transformer(key, value)

Type: `Function`

Receives the key and value for each item and is expected to return the new key.

## Related

See [`modify-values`](https://github.com/sindresorhus/modify-values) for modifying the values of an object.
