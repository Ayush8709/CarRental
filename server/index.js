import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
const app = express()
// const PORT = process.env.PORT || 8000;
const PORT = 8000;
// server
//Default Middleware
app.use(express.json())
app.use(cors())

//Database connact
import myDb from './config/Db.js';
myDb();

//save all carData Api in mongodb 
import saveAllApiMongodb from './routes/mainCarSaveApi.js'
app.use('/api/v1/savealldata', saveAllApiMongodb)


//userLogin and Signup Routes
import register from './routes/authRoutes.js'
app.use('/api/v1/auth',register)


//send All Car_Data_Api
import carApi from './routes/carDataRoutes.js';
app.use('/api/v1/cardata',carApi)


//ContactUs Route
import ContactUs from './routes/contactRoutes.js'
app.use('/api/v1/contact', ContactUs)

//User Details Data 
import userDetails from './routes/useDetails.js'
app.use('/api/v1/usedetails', userDetails)

//Default route
app.get('/',(req, res)=>{
    res.send("hello server")
})



app.listen((PORT),()=>{
    console.log(`Server is Running on Port ${PORT}`);
})


