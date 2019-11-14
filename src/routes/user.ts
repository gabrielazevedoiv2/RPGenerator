import * as express from "express";
import Users from "../schemas/userdb";
import Lock from "../helpers/lock";
import JWTManager from "../jwt";

const router = express.Router();

router.post("/validate", function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    Users.findOne({"username": username}, function(err, user) {        
        if (err) {
            res.send(err);
            return console.error(err);
        } else if (Lock.Hash(password) == user.password) {
            res.send(JWTManager.SignIn({...username, password}));
        }
    });
});

router.post("/save", function(req, res, next) {
    var user = {
        username: req.body.username,
        password: Lock.Hash(req.body.password),
        email: req.body.email
    }
    var newUser = Users.create(user);
    res.send(newUser);
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