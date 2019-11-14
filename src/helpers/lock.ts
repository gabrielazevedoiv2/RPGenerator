import * as Crypto from "crypto-js";

export default class Lock {
    static Hash(text: String) {
        return Crypto.SHA256(text);
    }
}