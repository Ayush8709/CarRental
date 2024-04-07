import express from 'express'
const router = express.Router()
import { carDataApi, mahindraCarApi , marutiSuzikiApi, tataCarApi } from '../controllers/carApiController.js';


//Send all Car Data Api
router.get('/data', carDataApi);


//Send only Mahindra Car Data 
router.get('/mahindradata', mahindraCarApi)



//Send only MarutiSuziki Car Data 
router.get('/marutidata', marutiSuzikiApi)



//Send only TATA Car Data 
router.get('/tatadata', tataCarApi)




export default router;