require('dotenv').config()
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const router = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/", router);
// const port = 3000;

// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })

module.exports = app;
