const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");

const { PORT = 3001 } = process.env;
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.error("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.error(`Server is running on port ${PORT}`);
});
