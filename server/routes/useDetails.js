import express from 'express'
const router = express.Router();
import { useDetilsData } from '../controllers/userDetailsController.js';

router.post('/userdetail', useDetilsData)


export default router;