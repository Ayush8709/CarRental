import mongoose from "mongoose";

const contactUsModel = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, ' name is required']
    },

    addresh: {
        type: String,
        required: [true, 'email is required'],
    },

    

    age: {
        type: Number,
        min: [2, 'Name less then 99 '],
        required: [true, 'age number is required']
    },

    pincode: {
        type: Number,
        min: [6, 'Please Enter 6 digit valid pincode '],
        required: [true, 'age number is required']
    },

    phoneNumber: {
        type: Number,
        min: [10, 'Please Enter vlid phone number '],
        required: [true, 'age number is required']
    },

    email:{
        type: String,
        required: [true, "please provide valid email number"]
    },

    issue:{
        type : String,
        required: [true, "please provide valid issue number"]
    },

    role:{
        type:String,
        default:"Customer"
    }

    
}, { timestamps: true })

const ContactSchema = mongoose.model('ContactSchema', contactUsModel)

export default ContactSchema;