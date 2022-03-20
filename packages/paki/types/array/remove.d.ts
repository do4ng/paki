interface Array<T> {
    /**
     * ```js
     * [1, 2, 3].remove(1) // [1, 3]
     * ```
     * @param index remove element at index
     */
    remove(index: number): Array<T>;
}
