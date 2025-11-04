import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  { userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
    customerName: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 50,
      
    },
    phoneNum: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9+\-\s()]+$/,
    },
    space: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
      trim: true
    },
    people: {
      type: Number,
      required: true,
      min: 1,
    }
  },
  {
    timestamps: true 
  }
);

// Optional: Add indexes for performance
bookingSchema.index({ date: 1, time: 1 });
bookingSchema.index({ phoneNum: 1 });

// Create and export model
const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;