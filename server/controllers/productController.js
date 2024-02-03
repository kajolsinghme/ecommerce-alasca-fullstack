const Product = require("../models/Product")

exports.createProduct = async (req, res) => {
    try {
        let existingProduct = await Product.findOne({ title: req.body.title });
        if (existingProduct) {
            return res.status(400).json({ "error": 'Product already exists' });
        }
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save(); 
        console.log(savedProduct);
        res.status(201).json({
            "message": "Product has been created successfully",
            "savedProduct": savedProduct
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            "message": "Product has been updated successfully",
            "updatedProduct": updatedProduct
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
   
exports.deleteProduct  = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ "message": "Product not found" });
        }

        res.status(200).json({
            "message": "Product has been deleted successfully",
            "deletedProduct": deletedProduct
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ "message": "Product not found" });
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllProducts = async (req, res) => {
    const qCategory = req.query.category;
    const qSort = req.query.sort;

    try {
        let products;

        if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        if (qSort) {
            if (qSort === 'asc' || qSort === 'desc') {
                products = products.sort((a, b) => {
                    return qSort === 'asc' ? a.price - b.price : b.price - a.price;
                });
            } else if (qSort === 'newest') {
                const filteredProducts = products.filter(product => product.categories.includes(qCategory))
                const newestProduct = filteredProducts.length > 0 ? filteredProducts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
                : products.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

                return res.status(200).json(newestProduct)
            }
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};