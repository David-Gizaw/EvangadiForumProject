require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.VITE_SERVER_PORT || 5000;

//db connection
const dbConnection = require("./config/dbconfig");

// test get request
app.get("/", (req, res) => {
  res.status(200).send("welcome");
});

//cors middleware
app.use(cors({ origin: ["http://localhost:5173"] }));

//json middleware
app.use(express.json());

// user routes middleware file import
const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/user", userRoutes);

// questions routes middleware file import
const questionRoutes = require("./routes/questionRoute");
app.use("/api/v1", questionRoutes);

// answers routes middleware file import
const answerRoutes = require("./routes/answerRoute");
app.use("/api/v1", answerRoutes);

async function start() {
  try {
    const result = await dbConnection.execute("select 'test' as test"); // Changed this line for testing
    console.log("DB connected", result);
    app.listen(port, () => {
      console.log(`Server running and listening on port ${port}`);
    });
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

start();
