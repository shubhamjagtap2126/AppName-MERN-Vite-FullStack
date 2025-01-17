const dotenv = require("dotenv").config();
const express = require("express");
const middleware = require("./middleware");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(middleware.errorHandler);
app.use(cors());

mongoose
  .connect(process.env.MONGOURL)
  .then(console.log("⚡DB: Connected"))
  .catch((err) => console.log(err));

// Home
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Home page" });
});

// Routes
// app.use("/api/users", require("./routes/userRoute"));


// Server render
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡Server: Listening on http://localhost:${port}`);
});