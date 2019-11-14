import * as express from "express";
import Users from "../schemas/userdb";
import JWTManager from "../jwt";

const router = express.Router();

router.use(JWTManager.Verify);

router.get("/users", function(req, res, next) {
    res.status(200).send("OK")
})

router.get("/:username", function(req, res, next) {
    Users.findOne({"username": req.params.username}, function(err, user) {
        if (err) return console.log(err);
        var userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            additionalProperties: user.additionalProperties
        }
        res.send(userData);
    });
});

router.post("/delete", function(req, res, next) {
    Users.deleteOne({"_id": req.body.id}, function(err) {
        if (err) return console.error(err);
        res.send("OK");
    });
});

router.post("/update", function(req, res, next) {
    Users.findOneAndUpdate({"_id": req.body.id}, {...req.body}, function(err) {
        if (err) return console.error(err);
        res.send("OK");
    });
});

export default router;