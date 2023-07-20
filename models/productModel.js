// Require the 'mongoose' module
const mongoose = require('mongoose');

// Create the schema for the 'product' collection
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
       
        unique: true,
        default: function() {
            return Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
        }
        
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
