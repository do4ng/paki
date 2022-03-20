interface Array<T> {
  /**
   * ```js
   * ["a", "b", "c", "d"].override(0, 2, [1, 2, 3]); // [1, 2, 3, "d"]
   * ```
   * @param start start index
   * @param end end index
   * @param replaceValue replace value (array)
   */
  override(start: number, end: number, replaceValue: any[]): Array<T>;
}

Array.prototype.override = function (
  start: number,
  end: number,
  replaceValue: any[]
): any[] {
  let arr = this.slice();
  arr.splice(start, end + 1, ...replaceValue);
  return arr;
};
