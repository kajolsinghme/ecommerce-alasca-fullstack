const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { userId, products, amount, address } = req.body;

        const newOrder = new Order({
            userId,
            products,
            amount,
            address,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            "message": "Order has been updated successfully",
            "updatedOrder": updatedOrder
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
   
exports.deleteOrder  = async (req, res) => {
    try {
        const deletedOrder= await Order.findByIdAndDelete(req.params.id);

        if (!deletedOrder) {
            return res.status(404).json({ "message": "Order not found" });
        }

        res.status(200).json({
            "message": "Order has been deleted successfully",
            "deletedOrder": deletedOrder
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });

        if (!orders) {
            return res.status(404).json({ "message": "Order not found" });
        }
        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllOrders = async (req, res) => {

    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json(error);
    }
};