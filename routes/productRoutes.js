// Require the 'express' module to create a router
const express = require('express');

// Require the 'productController' module to handle product-related requests
const productController = require('../controllers/productController');
const router = express.Router();

// Define the routes and their corresponding controller functions
// POST request to create a new product
router.post('/create', productController.createProduct);

// GET request to retrieve all products
router.get('/', productController.getProducts);

// DELETE request to delete a product by its ID
router.delete('/:id', productController.deleteProduct);

// POST request to update the quantity of a product by its ID
router.post('/:id/update_quantity', productController.updateProductQuantity);

// Export the router to be used in other parts of the application
module.exports = router;
