"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var skillSchema = new mongoose.Schema({
    name: String,
    formula: String,
    icon: String
});
const Skills = mongoose.model("Skills", skillSchema);
exports.default = Skills;
//# sourceMappingURL=skillsdb.js.map