import express from "express";
import { winrateRouter } from "./routes/winrate.route.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello Node.js!");
});

app.use("/winrate", (req, res) => winrateRouter(req, res));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});