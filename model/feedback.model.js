import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
    bookingId: {type: mongoose.Schema.Types.ObjectId,ref: 'Booking',required: true},
    rating: {type: Number,min: 1,max: 5,required: true},
    comment: {type: String,trim: true},
}, {timestamps: true});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;