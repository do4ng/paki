interface String {
  /**
   * same as `Number()`
   */
  number: () => number;
}

String.prototype.number = function () {
  return Number(this.toString());
};
