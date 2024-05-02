import express from 'express'
import authMiddleware from '../middleware/userMiddleware.js'
import { userGetData} from '../controllers/getUserDetailController.js'

const router = express.Router()

router.get('/getuser',authMiddleware, userGetData)
//updata user 

// router.put('/update', authMiddleware, updateUser)


// router.delete('/delete/:id',authMiddleware, deleteUser)

export default router