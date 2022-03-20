type evalMode = "eval" | "function";

interface String {
  /**
   * return result of code
   * ```js
   * "1 + 1".eval() // 2
   * "1 + 1".eval("eval") // 2
   * ```
   * @param mode use eval or function (default: `eval`)
   */
  eval(mode?: evalMode): string | null;
}

String.prototype.eval = function (mode: evalMode = "eval"): string | null {
  if (mode === "function") {
    return new Function("return " + this.toString())();
  } else if (mode === "eval") {
    return eval(this.toString());
  }
  return null;
};
