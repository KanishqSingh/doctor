import express from 'express'
import { addDoctor , admincancelAppointment, allDoctors, appointmentAdmin, loginAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailablity } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailablity)
adminRouter.get('/appointments',authAdmin,appointmentAdmin)
adminRouter.post('/cancel-appointment',authAdmin,admincancelAppointment)


export default adminRouter