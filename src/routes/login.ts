import * as express from "express";
import Users from "../schemas/userdb";
import Lock from "../helpers/lock";
import JWTManager from "../jwt";

const router = express.Router();

router.post("/authenticate", function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    Users.findOne({"username": username}, function(err, user) {
        if (err) {
            res.send(err);
            return console.error(err);
        } else if (Lock.Hash(password) == user.password) {
            res.send(JWTManager.SignIn({username, password}));
        }
    });
});

router.post("/save", function(req, res, next) {
    var user = {
        username: req.body.username,
        password: Lock.Hash(req.body.password),
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    var newUser = Users.create(user);
    res.send(newUser);
});

export default router;