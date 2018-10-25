const express = require("express");

const router = express.Router();
const productController = require("./routes/products");
const categoryController = require("./routes/categories");

router.use("/api/products", productController);

router.use("/api/categories", categoryController);

module.exports = router;
