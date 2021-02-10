const express = require("express");
const {Product} = require("../db/models");

const {productList, productCreate, productDetails, productDelete, productUpdate, fetchProduct} = require("../controllers/productsController");
const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
  const foundProduct = await fetchProduct(productId, next);
  if(foundProduct) {
    req.product = foundProduct;
    next()
  } else {
    next({
      status: 404,
      message: "Product not found"
    });
  }
})

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