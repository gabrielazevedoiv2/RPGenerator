import * as mongoose from "mongoose";

var skillSchema = new mongoose.Schema({
    name: String,
    formula: String,
    icon: String
});

const Skills = mongoose.model("Skills", skillSchema);

export default Skills;