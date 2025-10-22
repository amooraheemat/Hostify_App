import Order from '../modules/order.js';
import Menu from '../modules/menu.js';
import { sendOrderConfirmation } from './emailServices.js';

export const createOrder = async ({ customerName, email, phone, items }) => {
  const validated = await Promise.all(items.map(async it => {
    const mi = await Menu.findById(it.menuItemId);
    if (!mi) throw new Error(`Menu item not found: ${it.menuItemId}`);
    return { menuItem: mi._id, quantity: it.quantity, price: mi.price, menuDoc: mi };
  }));
  const totalAmount = validated.reduce((s, v) => s + v.price * v.quantity, 0);
  const orderItems = validated.map(v => ({ menuItem: v.menuItem, quantity: v.quantity }));
  const order = await Order.create({ customerName, email, phone, items: orderItems, totalAmount });
  const populated = await Order.findById(order._id).populate('items.menuItem');
  if (email) {
    try { await sendOrderConfirmation({ to: email, order: populated }); } catch (err) { console.warn('Order email failed', err.message); }
  }
  return populated;
};

export const getOrders = async (filter = {}) => Order.find(filter).populate('items.menuItem').sort({ createdAt: -1 });
export const updateOrderStatus = async (id, status) => Order.findByIdAndUpdate(id, { status }, { new: true }).populate('items.menuItem');
