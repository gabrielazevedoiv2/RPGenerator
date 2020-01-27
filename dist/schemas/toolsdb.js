"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var toolsSchema = new mongoose.Schema({
    toolName: String,
    toolLink: String,
    toolImage: String
});
const Tools = mongoose.model("Tools", toolsSchema);
exports.default = Tools;
//# sourceMappingURL=toolsdb.js.map