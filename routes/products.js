const express = require("express");


const {productList, productCreate, productDetails, productDelete, productUpdate} = require("../controllers/productsController");
const router = express.Router();

// ALL PRODUCTS ROUTE
router.get("/", productList);

  // CREATE ROUTE
router.post("/", productCreate)

// PRODUCT ROUTE
router.get("/:productId", productDetails);

// DELETE ROUTE
router.delete("/:productId", productDelete);

// UPDATE ROUTE
router.put("/:productId", productUpdate);

module.exports = router;