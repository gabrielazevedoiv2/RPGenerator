"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = require("crypto-js");
class Lock {
    static Hash(text) {
        return Crypto.SHA256(text);
    }
}
exports.default = Lock;
//# sourceMappingURL=lock.js.map