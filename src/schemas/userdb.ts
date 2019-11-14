import * as mongoose from "mongoose";

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const Users = mongoose.model("User", userSchema);

export default Users;