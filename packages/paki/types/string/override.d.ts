interface String {
    /**
     * ```js
     * "hello world".override(0, 5, "hi") // "hi world"
     * ```
     * if replace value is not specified:
     * ```js
     * "hello world".override(0, 5) // " world"
     * ```
     *
     * @param start start index
     * @param end end index
     * @param replaceValue replace value
     */
    override(start: number, end: number, replaceValue?: string): string;
}
