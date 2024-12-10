
import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"


//api for adding doctor

const addDoctor = async (req,res)=>{
    try {
        const {name,email,password,speciality,degree,experience,about,fee,address} = req.body
        
        // console.log("problem",req.file)
        const imageFile = req.file
        
        // console.log(name,email,password,speciality,degree,experience,about,fee,address)
        // console.log(imageFile)

        //checking for data 

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address){
            return res.json({success:false,message:"missing data"})

        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"enter valid email"})


            
        }

        if (password.length < 8) {
            return res.json({success:false,message:"please enter a valid password"})
            
        }

        //hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url


        // const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
        //     resource_type: 'image',
        // });

        // // Get the uploaded image URL from Cloudinary
        // const imageUrl = uploadResult.secure_url;

        // console.log("image url",imageUrl)

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fee,
            address:JSON.parse(address),
            date:Date.now()

        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"doctor added"})


        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
        
    }
}

//API for admin login
const loginAdmin = async(req,res) =>{
    try {

        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email + password , process.env.JWT_SECRET )
            res.json({success:true,token})



        } else{
            res.json({success:false,message:"Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}

// api to get all doctors to display in admin panel

const allDoctors = async(req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

//api to get all appointments list
const appointmentAdmin = async(req,res) =>{
    try {
        const appointments  = await appointmentModel.find({})
        res.json({success:true,appointments})
    } catch (error) {

        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

const admincancelAppointment = async(req,res) =>{
    try {

        const {appointmentId} = req.body 
        const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId , {cancelled:true})

        //deleting doctors slots
        const {docId , slotDate , slotTime } = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e=>e!==slotTime)

        await doctorModel.findByIdAndUpdate(docId , {slots_booked})
        res.json({success:true,message:"Appointment Cancelled"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}



export {addDoctor,loginAdmin,allDoctors,appointmentAdmin,admincancelAppointment}