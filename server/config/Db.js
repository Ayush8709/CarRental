import mongoose from "mongoose";

const myDb =async ()=>{
    const URL =`mongodb://localhost:27017/car_rantal`;
    try {
        await mongoose.connect(URL)
        console.log("DataBase Connacted Sucessfull");
    } catch (error) {
        console.log("Database Not Connacted");
    }

}

export default myDb;