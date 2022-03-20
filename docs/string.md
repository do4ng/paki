## add

```js
"1 + 4 = ".add("5"); // 1 + 4 = 5
```

## addFront

```js
"world".addFront("Hello "); // Hello world
```

## eval

```js
"1 + 1".eval(); // 2
```

## json

Same as : `JSON.parse()`

```js
'{"a": 1, "b": 2}'.json(); // {a: 1, b: 2}
```

## number

Same as : `Number()`

```js
"1".number(); // 1
```

## override

```js
"hello world".override(0, 5, "hi"); // "hi world"
```

if replace value is not specified:

```js
"hello world".override(0, 5); // " world"
```

## remove

```js
"abc".remove(1); // "ac"
```
