import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phoneNum: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  space: { type: String, enum: ["VIP", "Regular", "Outdoor"], default: "Regular" },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  people: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Confirmed","Cancelled"], default: "Pending" },
  
}, 

{ timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
