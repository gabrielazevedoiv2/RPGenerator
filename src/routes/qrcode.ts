import * as express from "express";
import * as QRCode from "qrcode";
import * as cors from "cors";

const router = express.Router();

router.use(cors())

router.post('/qrcode', function(req, res, next) { 
    console.log(req.body)
    QRCode.toDataURL(req.body["data"], function (err, url) {        
        res.send(url);
    });
});

router.get("/", function(req, res, next) {
    res.send("QRCode Works")
})

export default router;