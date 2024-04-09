import express from 'express'
const router = express.Router()
import { carApiSave } from '../controllers/carApiSave.js'


//Save all LocalData api in  Mongodb
router.post('/alldataSend', carApiSave)


export default router;