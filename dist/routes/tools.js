"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const toolsdb_1 = require("../schemas/toolsdb");
const router = express.Router();
router.get("/", function (req, res, next) {
    res.send("Tools Works!");
});
router.get("/tools", function (req, res, next) {
    toolsdb_1.default.find(function (err, tools) {
        if (err)
            return console.error(err);
        res.send(tools);
    });
});
exports.default = router;
//# sourceMappingURL=tools.js.map