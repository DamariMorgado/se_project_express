const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");
const mainRouter = require("./routes/index");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const { PORT = 3001 } = process.env;
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.error("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/", mainRouter);

app.use(errorLogger);
app.use(errors());

app.listen(PORT, () => {
  console.error(`Server is running on port ${PORT}`);
});
