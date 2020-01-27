"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var projectSchema = new mongoose.Schema({
    projectName: String,
    projectLink: String,
    projectImage: String
});
const Projects = mongoose.model("Projects", projectSchema);
exports.default = Projects;
//# sourceMappingURL=projectsdb.js.map