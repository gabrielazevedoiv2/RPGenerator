"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const projectsdb_1 = require("../schemas/projectsdb");
const router = express.Router();
router.get("/", function (req, res, next) {
    res.send("Projects Works!");
});
router.get("/projects", function (req, res, next) {
    projectsdb_1.default.find(function (err, projects) {
        if (err)
            return console.error(err);
        res.send(projects);
    });
});
exports.default = router;
//# sourceMappingURL=projects.js.map