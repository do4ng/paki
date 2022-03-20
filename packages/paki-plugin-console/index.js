const paki = require("pakijs");
const error = require("./lib/error");
const log = require("./lib/log");

paki.extend({ name: "log", target: "string", func: log });
paki.extend({ name: "error", target: "string", func: error });
