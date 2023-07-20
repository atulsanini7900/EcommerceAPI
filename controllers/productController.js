const Product = require('../models/productModel');

const productController = {
  createProduct: async (req, res) => {
    try {
      const { id, name, quantity } = req.body;

      // Create a new product
      const product = new Product({
        id,
        name,
        quantity,
      });

      // Save the product to the database
      const result = await product.save();

      res.json({ product: result });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding the product.' });
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json({ products });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the products.' });
    }
  },



deleteProduct: async (req, res) => {
  try {
    const productId = req.params.id;

    console.log('Deleting product with id:', productId);

    await Product.deleteOne({ id: productId });

    console.log('Product deleted successfully.');

    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error occurred while deleting the product:', error);
    res.status(500).json({ error: 'An error occurred while deleting the product.' });
  }
},

  
updateProductQuantity: async (req, res) => {
    try {
      const productId = req.params.id;
      const { number } = req.query;
  
      console.log('Updating product quantity for id:', productId);
  
      const updatedProduct = await Product.findOneAndUpdate(
        { id: productId },
        { $inc: { quantity: parseInt(number) } },
        { new: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found.' });
      }
  
      console.log('Product quantity updated successfully.');
  
      res.json({ product: updatedProduct, message: 'Updated successfully' });
    } catch (error) {
      console.error('Error occurred while updating the product quantity:', error);
      res.status(500).json({ error: 'An error occurred while updating the product quantity.' });
    }
  },
  
  
};

module.exports = productController;
