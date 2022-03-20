interface String {
  /**
   * ```js
   * "hello world".override(0, 5, "hi") // "hi world"
   * ```
   * if replace value is not specified:
   * ```js
   * "hello world".override(0, 5) // " world"
   * ```
   *
   * @param start start index
   * @param end end index
   * @param replaceValue replace value
   */
  override(start: number, end: number, replaceValue?: string): string;
}

String.prototype.override = function (
  start: number,
  end: number,
  replaceValue?: string
): string {
  let str = this.toString();
  if (replaceValue) {
    str = str.replace(str.substring(start, end), replaceValue);
  } else {
    str = str.substring(0, start) + str.substring(end);
  }
  return str;
};
