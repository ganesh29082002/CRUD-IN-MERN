
const express = require("express");
const productController = require("../controllers/products.controllers");
const router = express.Router();
router.get("/products/v1/:pageNo?/:pageLimit?/:search?"  , productController.getAllProduct)
router.post("/products/v1/",productController.createProduct)

router
  .route("/products/v1/:id?")
  .get(productController.getProductById) 
  .put(productController.updateProduct) 
  .delete(productController.deleteProduct); 

module.exports = router;
