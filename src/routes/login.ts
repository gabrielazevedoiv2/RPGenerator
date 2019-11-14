import * as express from "express";

const router = express.Router();

router.post("/login", function(req, res, next) {
    var credentials = {...req.body};
    
});

export default router;