interface Object {
    /**
     * ```js
     * {a: 1, b: 2}.forEach((value, index) => {console.log(`${index}: ${value}`)})
     * ```
     * @param callbackfn callback function
     */
    forEach(callbackfn: (value: any, index: number) => any): any;
}
