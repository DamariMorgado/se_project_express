const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const { PORT = 3001 } = process.env;
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.error("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

app.use(express.json());

// Temporary hardcoded auth — replace _id with your test user's _id from MongoDB
app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133",
  };
  next();
});

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.error(`Server is running on port ${PORT}`);
});
