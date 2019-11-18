"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
function start() {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect("mongodb://155.138.242.116:27017/rpggenerator", { auth: {
            authdb: "admin",
            user: "admin",
            password: "password"
        } }).then(function (db) {
    }, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}
exports.default = start;
//# sourceMappingURL=mongoose.js.map