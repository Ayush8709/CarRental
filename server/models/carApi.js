import mongoose from 'mongoose'

const yourSchema = new mongoose.Schema({

    id: Number,
    name: String,
    image: String,
    sheet: Number,
    lagguage: String,
    price: Number,
    model: Number,
    fueltype: String,
    category: {
        brand: String,
        cartype: String,
        rating: Number
    }
}, { timestamps: true });

const carRentalMainApi = mongoose.model('carRentalMainApi', yourSchema);


export default carRentalMainApi