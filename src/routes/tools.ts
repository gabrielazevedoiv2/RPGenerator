import * as express from "express";
import Tools from "../schemas/toolsdb";
import Lock from "../helpers/lock";
import JWTManager from "../jwt";

const router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Tools Works!")
});

router.get("/tools", function(req, res, next) {
    Tools.find(function(err, tools) {
        if (err) return console.error(err);
        res.send(tools);
    });
});

export default router;