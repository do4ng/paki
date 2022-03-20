module.exports = {
  name: "toHTML",
  target: "string",
  func: function () {
    if (typeof window !== "undefined") {
      const element = document.createElement("template");
      element.innerHTML = this.toString();
      return element.innerHTML;
    } else {
      console.error("this plugin is only available in browser");
    }
  },
};
