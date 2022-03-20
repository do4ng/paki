type targetType = "number" | "string" | "array" | "object" | "function";
interface Plugin {
  target: targetType;
  name: string;
  func: Function;
}

export function extend(plugin: Plugin) {
  switch (plugin.target) {
    case "number":
      Number.prototype[plugin.name] = plugin.func;
      break;

    case "array":
      Array.prototype[plugin.name] = plugin.func;
      break;

    case "object":
      Object.prototype[plugin.name] = plugin.func;
      break;

    case "string":
      String.prototype[plugin.name] = plugin.func;
      break;

    case "function":
      Function.prototype[plugin.name] = plugin.func;
      break;

    default:
      console.error(`${plugin.target} is not supported`);
      break;
  }
}
