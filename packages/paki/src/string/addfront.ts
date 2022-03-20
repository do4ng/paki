interface String {
  /**
   * ```js
   * 'def'.addFront("abc") // abcdef
   * ```
   * @param value add value
   */
  addFront(value: string): string;
}

String.prototype.addFront = function (value: string): string {
  return value + this.toString();
};
