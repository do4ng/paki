const paki = require("pakijs");

paki.extend({
  name: "html",
  target: "string",
  func: function () {
    if (typeof window !== "undefined") {
      const element = document.createElement("template");
      element.innerHTML = this.toString();
      return element.content.firstChild;
    } else {
      console.error("this plugin is only available in browser");
    }
  },
});
