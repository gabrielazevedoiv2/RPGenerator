import * as express from "express";
import skillrouter from "./routes/skillroute";
import userrouter from "./routes/user";
import mongoStart from "./mongoose";

mongoStart();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.use("/skills", skillrouter);
app.use("/users", userrouter);

const PORT = process.env.PORT || 3060;

app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
});