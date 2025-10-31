import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },quantity: { type: Number, min: 1, required: true }}],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Processing', 'Completed', 'Cancelled'], default: 'Pending' },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;