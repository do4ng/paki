interface Object {
    /**
     * ```js
     * {a: 1, b: 2}.map((value, index) => (value + 1)) // {a: 2, b: 3}
     * ```
     * @param callbackfn callback function
     */
    map(callbackfn: (value: any, index: number) => any): any;
}
