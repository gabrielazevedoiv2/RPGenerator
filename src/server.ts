import * as express from "express";
import skillRouter from "./routes/skill";
import userRouter from "./routes/user";
import loginRouter from "./routes/login";
import mongoStart from "./mongoose";

mongoStart();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/login", loginRouter);
app.use("/skills", skillRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT || 3060;

app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
});