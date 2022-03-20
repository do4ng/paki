## extend

```js
const paki = require("paki");

paki.extend({
  name: "greet",
  target: "string",
  func: function () {
    console.log(`Hello, ${this.toString()}`);
  },
});

"world".greet(); // Hello, world
```
