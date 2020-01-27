import * as express from "express";
import Projects from "../schemas/projectsdb";
import Lock from "../helpers/lock";
import JWTManager from "../jwt";

const router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Projects Works!")
});

router.get("/projects", function(req, res, next) {
    Projects.find(function(err, projects) {
        if (err) return console.error(err);
        res.send(projects);
    });
});

export default router;