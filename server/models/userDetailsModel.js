import mongoose from 'mongoose'

const userDetails = new mongoose.Schema({
    name:{
        type:String,
        required:[true ,"Enter userDetails Name"]
    },
    phone:{
        type:String,
        required:[true, "Enter useDetial phone"]
    },
    email:{
        type:String,
        required:[true,"Enter useDetails Email"]
    },
    city:{
        type:String,
        required:[true,"Enter useDetails city"]
    },
    country:{
       type:String,
       default: 'India'
        
    },
    zip:{
        type:String,
        required:[true,"Enter useDetails zip"]
    },
    price:{
        type:String,
        required:[true, "Enter your total amound"]
    },
}, {timestamps:true})

const userDetailsdata = mongoose.model('userDetailsdata', userDetails)

export default userDetailsdata