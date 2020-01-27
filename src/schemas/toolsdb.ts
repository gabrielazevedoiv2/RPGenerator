import * as mongoose from "mongoose";

var toolsSchema = new mongoose.Schema({
    toolName: String,
    toolLink: String,
    toolImage: String
});

const Tools = mongoose.model("Tools", toolsSchema);

export default Tools;