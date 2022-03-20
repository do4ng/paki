# paki

Make repetitive and long code easier

[📜 Document](https://github.com/kangdongmandoo/paki/tree/main/docs) [📦 Repository](https://github.com/kangdongmandoo/paki)

---

## Installation

```bash
$yarn add pakijs
$npm install pakijs
```

## Usage

### with node

```js
import "pakijs";
// or
require("pakijs");
```

### with vanilla html

```html
<script src="https://unpkg.com/pakijs/dist/browser.js"></script>
```

## Examples

```js
"World".override(0, 0, "Hello ");
// Hello World
```

long code to short code:

```js
Object.values({ a: 0, b: 1 }).forEach((e) => {
  // ...
});
```

to:

```js
({ a: 0, b: 1 }.forEach((e) => {
  // ...
}));
```

## LICENSE

MIT License
