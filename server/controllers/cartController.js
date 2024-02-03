const Cart = require("../models/Cart")

exports.addToCart = async (req,res) => {
    try{
        const { productId, quantity } = req.body;

        let cartItem = await Cart.findOne({ productId });
        if(cartItem){
            Cart.quantity += quantity;
            await cartItem.save();
        }
        else{
            const newcartItem = new Cart(req.body)
            res.status(201).json({
                "message": "Product has been added to cart successfully",
                "cartItem": newcartItem
            });
        }
    }   
    catch(error) {
        res.status(500).json(error);
    }
}

exports.updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
        res.status(200).json({
            "message": "Cart has been updated successfully",
            "updatedcart": updatedCart
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
   
exports.deleteCart = async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id);

        if (!deletedCart) {
            return res.status(404).json({ "message": "Cart not found" });
        }

        res.status(200).json({
            "message": "Cart has been deleted successfully",
            "deletedCart": deletedCart
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });

        if (!cart) {
            return res.status(404).json({ "message": "Cart not found" });
        }
        res.status(200).json(cart);

    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } 
    catch (err) {
        res.status(500).json(err);
    }
};