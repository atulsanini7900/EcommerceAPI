// Import the 'Product' model
const Product = require('../models/productModel');

// Controller for handling product-related operations
const productController = {
  // Create a new product and save it to the database
  createProduct: async (req, res) => {
    try {
      const { id, name, quantity } = req.body;

      // Create a new product instance
      const product = new Product({
        id,
        name,
        quantity,
      });

      // Save the product to the database
      const result = await product.save();

      // Respond with the created product
      res.json({ product: result });
    } catch (error) {
      // If an error occurs during product creation, respond with an error message
      res.status(500).json({ error: 'An error occurred while adding the product.' });
    }
  },

  // Get all products from the database
  getProducts: async (req, res) => {
    try {
      // Retrieve all products from the database
      const products = await Product.find();

      // Respond with the array of products
      res.json({ products });
    } catch (error) {
      // If an error occurs during product retrieval, respond with an error message
      res.status(500).json({ error: 'An error occurred while retrieving the products.' });
    }
  },

  // Delete a product from the database by its ID
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;

      // Log the ID of the product being deleted
      console.log('Deleting product with id:', productId);

      // Delete the product from the database
      await Product.deleteOne({ id: productId });

      // Log a success message after deletion
      console.log('Product deleted successfully.');

      // Respond with a success message
      res.json({ message: 'Product deleted' });
    } catch (error) {
      // If an error occurs during product deletion, log the error and respond with an error message
      console.error('Error occurred while deleting the product:', error);
      res.status(500).json({ error: 'An error occurred while deleting the product.' });
    }
  },

  // Update the quantity of a product in the database by its ID
  updateProductQuantity: async (req, res) => {
    try {
      const productId = req.params.id;
      const { number } = req.query;

      // Log the ID of the product being updated
      console.log('Updating product quantity for id:', productId);

      // Find the product and update its quantity with the specified value
      const updatedProduct = await Product.findOneAndUpdate(
        { id: productId },
        { $inc: { quantity: parseInt(number) } },
        { new: true }
      );

      // If the product is not found, respond with an error message
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found.' });
      }

      // Log a success message after updating the product's quantity
      console.log('Product quantity updated successfully.');

      // Respond with the updated product and a success message
      res.json({ product: updatedProduct, message: 'Updated successfully' });
    } catch (error) {
      // If an error occurs during product quantity update, log the error and respond with an error message
      console.error('Error occurred while updating the product quantity:', error);
      res.status(500).json({ error: 'An error occurred while updating the product quantity.' });
    }
  },
};

// Export the productController for use in other parts of the application
module.exports = productController;
