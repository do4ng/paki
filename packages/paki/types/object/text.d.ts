interface Object {
    /**
     * same as `JSON.stringify`
     */
    text(replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
}
