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
