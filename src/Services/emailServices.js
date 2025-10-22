import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

export const sendBookingConfirmation = async ({ to, booking }) => {
  const html = `<p>Hi ${booking.name},</p>
    <p>Your booking for <strong>${booking.date}</strong> at <strong>${booking.time}</strong> (${booking.space}) is confirmed.</p>
    <p>Guests: ${booking.people}</p>`;
  await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject: 'Booking Confirmation', html });
};

export const sendOrderConfirmation = async ({ to, order }) => {
  const itemsHtml = order.items.map(i => `<li>${i.quantity} x ${i.menuItem.name}</li>`).join('');
  const html = `<p>Hi ${order.customerName},</p>
    <p>Your order is received:</p><ul>${itemsHtml}</ul><p>Total: ${order.totalAmount}</p>`;
  await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject: 'Order Confirmation', html });
};

export const sendPasswordReset = async ({ to, token }) => {
  const url = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
  const html = `<p>Reset your password (valid 1 hour): <a href="${url}">${url}</a></p>`;
  await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject: 'Password Reset', html });
};