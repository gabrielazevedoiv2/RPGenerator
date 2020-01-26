"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
const router = express.Router();
router.use(cors());
router.post('/qrcode', function (req, res, next) {
    console.log(req.body);
    QRCode.toDataURL(req.body["data"], function (err, url) {
        res.send(url);
    });
});
router.get("/", function (req, res, next) {
    res.send("QRCode Works");
});
exports.default = router;
//# sourceMappingURL=qrcode.js.map