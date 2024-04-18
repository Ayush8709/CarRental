import mongoose from "mongoose";

const contactUsModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, ' name is required']
    },

    phone: {
        type: String,
        // min: [10, 'Please Enter vlid phone number '],
        required: [true, 'age number is required']
    },

    email: {
        type: String,
        required: [true, "please provide valid email number"]
    },

    message: {
        type: String,
        required: [true, "please provide valid issue number"]
    },

    role: {
        type: String,
        default: "Customer"
    }


}, { timestamps: true })

const ContactSchema = mongoose.model('ContactSchema', contactUsModel)

export default ContactSchema;