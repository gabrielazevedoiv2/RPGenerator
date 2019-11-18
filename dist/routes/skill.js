"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const skillsdb_1 = require("../schemas/skillsdb");
const jwt_1 = require("../jwt");
const router = express.Router();
router.use(jwt_1.default.Verify);
router.get("/", function (req, res, next) {
    res.send("skills works");
});
router.get("/skills", function (req, res, next) {
    skillsdb_1.default.find(function (err, skills) {
        if (err)
            return console.error(err);
        res.send(skills);
    });
});
router.get("/skills/:id", function (req, res, next) {
    skillsdb_1.default.findById(req.params.id, function (err, skills) {
        if (err)
            return console.error(err);
        res.send(skills);
    });
});
router.post("/save", function (req, res, next) {
    var newSkill = skillsdb_1.default.create(req.body);
    res.send(newSkill);
});
router.post("/delete", function (req, res, next) {
    var deletedSkill = skillsdb_1.default.deleteOne({ "_id": req.body.id }, function (err) {
        if (err)
            return console.error(err);
        res.send("OK");
    });
});
router.post("/update", function (req, res, next) {
    var updatedSkill = skillsdb_1.default.findOneAndUpdate({ "_id": req.body.id }, Object.assign({}, req.body), function (err) {
        if (err)
            return console.error(err);
        res.send("OK");
    });
});
exports.default = router;
//# sourceMappingURL=skill.js.map