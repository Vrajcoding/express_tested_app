import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, "items Must be required"],
        trim: true,
        minlength: [2, "items minimum length is 2"],
        maxlength: [100, "items maximum length is 100"]
    },
    price: {
        type: String,
        required: [true, "price must br requied"],
    },
    description: {
        type: String,
        required: [true, "description must be required"],
        trim: true,
        minlength: [2, "description minimum length is 2"],
        maxlength: [100, "description maximum length is 100"]
    }
}, { timestamps: true })

const Item = mongoose.model("Item", itemSchema);

export default Item;