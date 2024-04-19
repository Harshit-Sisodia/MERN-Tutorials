const express = require('express')
const productsController = require('../controllers/productsController.js')
const productRouter = express.Router()

productRouter.route('/')
    .get(productsController.getAllProducts)
    .post(productsController.addProduct)

productRouter.route("/:id")
    .patch(productsController.updateProduct).delete(productsController.deleteProduct)

module.exports= productRouter;