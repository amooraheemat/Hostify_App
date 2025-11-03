import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendBookingConfirmation = async (booking) => {
  try {
    const templatePath = path.join(process.cwd(),'src','Services' ,'views', 'email', 'bookingConfirmation.ejs');
    const html = await ejs.renderFile(templatePath, { booking });

    await transport.sendMail({
      from: `"Lounge Booking" <${process.env.EMAIL_USER}>`,
      to:  req.user.email,
      subject: `Booking Confirmed — ${booking.space}`,
      html,
    });

    console.log(` Cancellation email sent to ${booking.email}`);
  } catch (err) {
    console.error(' Error sending booking confirmation email:', err.message);
  }
};

export const sendBookingCancellation = async (cancelbooking) => {
  try {
    const templatePath = path.join(process.cwd(),'src', 'Services', 'views', 'email', 'bookingCancellation.ejs');
    const html = await ejs.renderFile(templatePath, { booking:cancelbooking });

    await transport.sendMail({
      from: `"Lounge Booking" <${process.env.EMAIL_USER}>`,
      to: cancelbooking.email,
      subject: `Booking Cancelled — ${cancelbooking.space}`,
      html,
    });

    console.log(`Cancellation email sent to ${cancelbooking.email}`);
  } catch (err) {
    console.error(' Error sending booking cancellation email:', err.message);
  }
};
