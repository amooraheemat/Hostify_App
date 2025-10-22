import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type: String, required:true, unique: true, lowercase:true},
    password:{type:String, required: true},
    role:{type: String, enum:['customer', 'staff', 'admin','Manager'], default: 'customer'}
}, {timestamps: true})

export default mongoose.model('User', userSchema);