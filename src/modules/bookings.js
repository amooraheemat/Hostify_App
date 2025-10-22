import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    b_name:String,
    phone_no: String,
    date:String,
    time: String,
    space:{type:String, enum:['VIP', 'Regular', 'Outdoor'], default: 'Regular'},
    space_status:{type:String, enum:['Booked','Cancelled'], default: 'Booked'}
}, {timestamps: true})

export default mongoose.model('Bookings', bookingSchema)