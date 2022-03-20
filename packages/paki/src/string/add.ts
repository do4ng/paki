interface String {
  /**
   * ```js
   * 'abc'.add("def") // abcdef
   * ```
   * @param value add value
   */
  add(value: string): string;
}

String.prototype.add = function (value: string): string {
  return this.toString() + value;
};
