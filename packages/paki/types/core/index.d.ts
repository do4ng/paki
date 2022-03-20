declare type targetType = "number" | "string" | "array" | "object" | "function";
interface Plugin {
    target: targetType;
    name: string;
    func: Function;
}
export declare function extend(plugin: Plugin): void;
export {};
