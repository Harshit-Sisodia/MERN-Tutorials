const express = require('express')
const reviewsController = require('../controllers/productsController.js')
const reviewsRouter = express.Router()

productRouter.route('/')
    .get(reviewsController.getAllProducts)
    .post(reviewsController.addProduct)

productRouter.route("/:id")
    .patch(reviewsController.updateProduct).delete(reviewsController.deleteProduct)

module.exports= productRouter;