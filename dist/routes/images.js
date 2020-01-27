"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const router = express.Router();
router.use(cors());
router.use("/", express.static('../images/'));
exports.default = router;
//# sourceMappingURL=images.js.map