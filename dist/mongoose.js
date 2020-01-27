"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
function start() {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.DBURL, { auth: {
            authdb: process.env.AUTHDB,
            user: process.env.DBUSER,
            password: process.env.PASS
        } }).then(function (db) {
    }, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}
exports.default = start;
//# sourceMappingURL=mongoose.js.map