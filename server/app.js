require('dotenv').config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const request = require("request");
const AWS = require('aws-sdk');

const s3 = new AWS.S3();


const router = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/assets/img/subHeader/adidas_icon_creatorID_WHITE_v6.png', (req, res) => {
  const params = { Bucket: 'shoedidas-static/assets/img/subHeader', Key: 'adidas_icon_creatorID_WHITE_v6.png' }; // keyname can be a filename
  s3.getObject(params, (err, data) => {
    if (err) {
      return res.send({ "error": err });
    }
    const objectData = data.Body.toString("image/png");
    res.send({ objectData });
  });
});

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/", router);

module.exports = app;
