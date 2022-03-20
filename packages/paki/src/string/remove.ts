interface String {
  /**
   * ```js
   * 'abc'.remove(1) // ac
   * ```
   * @param index remove character at index
   */
  remove(index: number): string;
}

String.prototype.remove = function (index: number): string {
  let str = this.toString();
  str = str.substring(0, index) + str.substring(index + 1);
  return str;
};
