"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const skill_1 = require("./routes/skill");
const user_1 = require("./routes/user");
const login_1 = require("./routes/login");
const qrcode_1 = require("./routes/qrcode");
const tools_1 = require("./routes/tools");
const projects_1 = require("./routes/projects");
const mongoose_1 = require("./mongoose");
mongoose_1.default();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/login", login_1.default);
app.use("/skills", skill_1.default);
app.use("/users", user_1.default);
app.use("/qrcodeapi", qrcode_1.default);
app.use("/tools", tools_1.default);
app.use("/projects", projects_1.default);
app.use("/images", express.static(__dirname + '/images'));
const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map