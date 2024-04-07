import express from 'express'
const router = express.Router()
import { myCarRentalContactPage } from '../controllers/contactController.js';
//This is a Contact us page Router

router.post('/contactus' ,myCarRentalContactPage)


export default router;