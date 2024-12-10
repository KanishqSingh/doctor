import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectcloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

//app config
const app = express()
const port = process.env.PORT || 4000 
connectDB()
connectcloudinary()

//middlewares
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log("Request received:");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("File:", req.file);
    next();
  });

//api endpoints

app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

//localhost:4000/api/admin/add-doctor

app.get('/',(req,res)=>{
    res.send("api working")

})

app.listen(port,()=>console.log("Server started",port))