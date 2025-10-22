import mongoose, { Types } from "mongoose";

const menuSchema = new mongoose.Schema({
    menu_name:{type:String, required: true},
    category:{type:String, enum:['Food', 'Drink'], reuired: true},
    description:{type: String},
    price: {type:Number, required: true},
    available: {type: Boolean, default: true},
    imgUrl:{type: String},
}, {timestamps: true});

export default mongoose.model('Menu', menuSchema)