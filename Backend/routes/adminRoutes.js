import express from "express"
const router = express.Router()
import { authAdmin, getAdminProfile, updateAdminProfile} from "../controllers/adminController.js"
import asyncHandler from "express-async-handler"
import protect from "../middleware/authMiddleware.js"

router.post('/login', authAdmin)
router.route('/profile').get(protect, getAdminProfile).put(protect, updateAdminProfile)



 
export default router;