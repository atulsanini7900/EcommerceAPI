// Require the 'mongoose' module to work with MongoDB
const mongoose = require('mongoose');

// Create the schema for the 'product' collection
const productSchema = new mongoose.Schema({
    // ID field for the product, which must be a unique number
    id: {
        type: Number,
        unique: true,
        default: function() {
            return Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999 as a default value
        }
    },
    // Name field for the product, which must be a string and is required
    name: {
        type: String,
        required: true
    },
    // Quantity field for the product, which is a number
    quantity: {
        type: Number
    }
});

// Create a model 'Product' based on the productSchema
const Product = mongoose.model('Product', productSchema);

// Export the 'Product' model for use in other parts of the application
module.exports = Product;
