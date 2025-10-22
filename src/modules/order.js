import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
  quantity: { type: Number, required: true }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  phone: String,
  items: [OrderItemSchema],
  totalAmount: Number,
  status: { type: String, enum: ['Pending', 'Preparing', 'Delivered', 'Cancelled'], default: 'Pending' },
}, {timestamps: true});

export default mongoose.model('Order', orderSchema);