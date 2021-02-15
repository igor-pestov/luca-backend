const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/routes");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DatabaseChat is connected successfully");
  })
  .catch((e) => {
    console.log("Error with connecting to database");
  });
app.use("/",route)
app.listen(3000, () => {
  console.log("port working");
});