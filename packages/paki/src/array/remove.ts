interface Array<T> {
  /**
   * ```js
   * [1, 2, 3].remove(1) // [1, 3]
   * ```
   * @param index remove element at index
   */
  remove(index: number): Array<T>;
}

Array.prototype.remove = function (index: number): any {
  let arr = this.slice();
  arr.splice(index, 1);
  return arr;
};
