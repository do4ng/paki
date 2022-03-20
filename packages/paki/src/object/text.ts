interface Object {
  /**
   * same as `JSON.stringify`
   */
  text(
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
  ): string;
}

Object.prototype.text = function (
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number
): string {
  return JSON.stringify(this, replacer, space);
};
