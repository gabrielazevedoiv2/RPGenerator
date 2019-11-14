import * as express from "express";
import Skills from "../schemas/skillsdb";
import JWTManager from "../jwt";

const router = express.Router();

router.use(JWTManager.Verify)

router.get("/", function(req, res, next) {
    res.send("skills works")
});

router.get("/skills", function(req, res, next) {
    Skills.find(function(err, skills) {
        if (err) return console.error(err);
        res.send(skills);
    });
});

router.get("/skills/:id", function(req, res, next) {
    Skills.findById(req.params.id, function(err, skills) {
        if (err) return console.error(err);
        res.send(skills);
    });
});

router.post("/save", function(req, res, next) {
    var newSkill = Skills.create(req.body);
    res.send(newSkill);
});

router.post("/delete", function(req, res, next) {
    var deletedSkill = Skills.deleteOne({"_id": req.body.id}, function(err) {
        if (err) return console.error(err);
        res.send("OK");
    });
});

router.post("/update", function(req, res, next) {
    var updatedSkill = Skills.findOneAndUpdate({"_id": req.body.id}, {...req.body}, function(err) {
        if (err) return console.error(err);
        res.send("OK");
    });
});

export default router;