import * as mongoose from "mongoose";

var projectSchema = new mongoose.Schema({
    projectName: String,
    projectLink: String,
    projectImage: String
});

const Projects = mongoose.model("Projects", projectSchema);

export default Projects;