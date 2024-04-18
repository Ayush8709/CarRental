import mongoose from "mongoose";

const myDb =async ()=>{
    const URL =`mongodb://localhost:27017/car_rantal`;
    // const URL =`mongodb+srv://ayushsingh:ayushsingh@atlascluster.fjzho9i.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL)
        console.log("DataBase Connacted Sucessfull");
    } catch (error) {
        console.log("Database Not Connacted");
    }

}

export default myDb;