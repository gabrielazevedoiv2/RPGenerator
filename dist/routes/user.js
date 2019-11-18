"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userdb_1 = require("../schemas/userdb");
const jwt_1 = require("../jwt");
const router = express.Router();
router.use(jwt_1.default.Verify);
router.get("/users", function (req, res, next) {
    res.status(200).send("OK");
});
router.get("/:username", function (req, res, next) {
    userdb_1.default.findOne({ "username": req.params.username }, function (err, user) {
        if (err)
            return console.log(err);
        var userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            additionalProperties: user.additionalProperties
        };
        res.send(userData);
    });
});
router.post("/delete", function (req, res, next) {
    userdb_1.default.deleteOne({ "_id": req.body.id }, function (err) {
        if (err)
            return console.error(err);
        res.send("OK");
    });
});
router.post("/update", function (req, res, next) {
    userdb_1.default.findOneAndUpdate({ "_id": req.body.id }, Object.assign({}, req.body), function (err) {
        if (err)
            return console.error(err);
        res.send("OK");
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map