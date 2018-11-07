require('dotenv').config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/", router);

module.exports = app;
