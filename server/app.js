require("dotenv").config();

const express = require("express");
const app = express();
const authMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.VITE_SERVER_PORT;

//db connection
const dbConnection = require("./config/dbconfig");

// test get request
app.get("/", (req, res) => {
  res.status(200).send("welcome");
});
//cors middleware
app.use(cors((origins = ["http://localhost:5173"])));

//json middleware
app.use(express.json());

// user routes middleware file import
const userRoutes = require("./routes/userRoutes");

// user routes middleware
app.use("/api/v1/user", userRoutes);

// questions routes middleware file import
const questionRoutes = require("./routes/questionRoute");
// questions routes middleware
app.use("/api/v1", [questionRoutes]);
// answers routes middleware file import
const answerRoutes = require("./routes/answerRoute");

// answers routes middleware
app.use("/api/v1", answerRoutes);

async function start() {
  try {
    const result = await dbConnection.execute("select 'test'");
    console.log("db connected");
    await app.listen(port);
    console.log(`server running and listening on port ${port}`);
  } catch (err) {
    console.log(err.message);
  }
}

start();
