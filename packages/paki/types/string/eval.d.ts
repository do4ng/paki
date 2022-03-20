declare type evalMode = "eval" | "function";
interface String {
    /**
     * return result of code
     * ```js
     * "1 + 1".eval() // 2
     * "1 + 1".eval("eval") // 2
     * ```
     * @param mode use eval or function (default: `eval`)
     */
    eval(mode?: evalMode): string | null;
}
