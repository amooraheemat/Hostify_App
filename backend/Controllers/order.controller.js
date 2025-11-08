import Order from "../Models/order.model.js";

// Create a new order
export const createOrder = async (req, res, next) => {
  try {
    const { items, totalPrice } = req.body;

    const order = await Order.create({ 
      userId: req.user.id,
      customerName: req.user.username || req.user.name || req.user.email, items, totalPrice });
    res.status(201).json({ success: true, order });
  } catch (err) {
    next(err);
  }
};

// Get all orders (Admin) or user’s orders
export const getallOrders = async (req, res, next) => {
  try {
    const filter = req.user.role === "admin" ? {} : { userId: req.user.id };
    const orders = await Order.find(filter)
      .populate("userId", "username name email")
      .sort({ createdAt: -1 });
      
    res.json({ success: true, orders });
  } catch (err) {
    next(err);
  }
};

// Update order status (Admin)
export const updateOrderStatus = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ success: true, order });
  } catch (err) {
    next(err);
  }
};

// Delete Order
export const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Order deleted successfully", deleteOrder:order });
  } catch (err) {
    next(err);
  }
};