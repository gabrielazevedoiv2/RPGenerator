"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userdb_1 = require("../schemas/userdb");
const lock_1 = require("../helpers/lock");
const jwt_1 = require("../jwt");
const router = express.Router();
router.post("/authenticate", function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    userdb_1.default.findOne({ "username": username }, function (err, user) {
        if (err) {
            res.send(err);
            return console.error(err);
        }
        else if (lock_1.default.Hash(password) == user.password) {
            res.send(jwt_1.default.SignIn({ username, password }));
        }
    });
});
router.post("/save", function (req, res, next) {
    var user = {
        username: req.body.username,
        password: lock_1.default.Hash(req.body.password),
        email: req.body.email
    };
    var newUser = userdb_1.default.create(user);
    res.send(newUser);
});
exports.default = router;
//# sourceMappingURL=login.js.map