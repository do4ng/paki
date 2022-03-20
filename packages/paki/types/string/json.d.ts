interface String {
    /**
     * same as `JSON.parse()`
     * ```js
     * '{"a": 1, "b": 2}'.json() // {a: 1, b: 2}
     * ```
     */
    json: (reviver?: (this: any, key: string, value: any) => any) => any;
}
