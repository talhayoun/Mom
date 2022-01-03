const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT;

require("./db/mongoose");

const userRouter = require("../src/routers/userRouter");
const mealRouter = require("../src/routers/mealsRouter");

app.get("/", (req, res) => { res.send("ok") })
app.use(cors());
app.use(express.json())

app.use(userRouter);
app.use(mealRouter);

app.listen(port, () => {
    console.log('Server connected: ', port)
})