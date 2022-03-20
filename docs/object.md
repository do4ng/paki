## forEach

```js
({ a: 1, b: 2 }.forEach(function (value, index) {
  console.log(key, index);
}));
// a 0
// b 1
```

## map

```js
({ a: 1, b: 2 }.map(function (value, index) {
  return value * 2;
}));
// {a: 2, b: 4}
```

## text

```js
({ a: 1, b: 2 }.text());
// "{\"a\": 1, \"b\": 2}"
```
