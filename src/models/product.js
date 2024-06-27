const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productImage: {
        type: [String],
        default: [],
        required: true
    },
    productName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    size: {
        type: [String],
        default: [],
        required: true
    },
    productDetail: {
        type: String,
        require: true
    },
    category: {
        type: [String],
        require: true
    },
    color: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model('product', productSchema);