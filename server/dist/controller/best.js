"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
function hello(req, res) {
    res.json({ message: "hello world" });
}
exports.hello = hello;
