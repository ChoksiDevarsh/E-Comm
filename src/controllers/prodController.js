const product = require('../models/product');

const createProd = async (req, res) => {
    try {
        const { productImage, productName, description, price, size, productDetail, category, color } = req.body;
        const newProduct = new product({
            productImage,
            productName,
            description,
            price,
            size,
            productDetail,
            category,
            color
        });
        const savedProd = await newProduct.save();

        console.log(productImage, 'Product Image');
        console.log(productName, 'Product Name');
        console.log(description, 'Description');
        console.log(price, 'Price');
        console.log(size, 'Size');
        console.log(productDetail, 'Product Details');
        console.log(category, 'Category');
        console.log(color, 'Color');

        return res.status(201).json({ message: "Product created successfully", savedProd });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error creating product", error });
    }
}
const prodDetails = async (req, res) => {
    try {
        const { prodId } = req.params;

        const prod = await product.findById(prodId);
        if (!prod) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product found", prod });
    } catch (error) {
        res.status(400).json({ message: "Error finding product", error });
    }
}

const getAllProd = async (req, res) => {
    try {
        const prod = await product.find();
        return res.status(200).json({ message: "Products found", prod })
    }
    catch (error) {
        res.status(400).json({ message: "Error finding products", error })
    }
}
module.exports = { createProd, prodDetails, getAllProd }