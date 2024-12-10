import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"

const changeAvailablity= async(req,res) =>{
    try {

        const {docId} = req.body

        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available: !docData.available})
        res.json({success:true , message:'Availability changed'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}

const doctorList = async(req,res) =>{
    try {
        const doctors = await doctorModel.find({}).select(['-password','-email'])

        res.json({success:true,doctors})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})

        
    }
}

//doctor login api
const loginDoctor = async(req,res) =>{
    try {

        const {email , password} = req.body
        const doctor = await doctorModel.findOne({email})
        if (!doctor) {
            return res.json({success:false,message:'invalid credentials'})
            
        } 

        const isMatch = await bcrypt.compare(password , doctor.password)

        if (isMatch) {

            const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET )
            res.json({success:true,token})
            
        }else{
            res.json({success:false,message:"invalid credentials"})
            
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})

        
    }
}

//appointments of particular doctor
const appointmentsDoctor = async(req,res) =>{
    try {
        const {docId} = req.body
        const appointments = await appointmentModel.find({docId})

        res.json({success:true,appointments})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

//api to mark appointment completed 
const appointmentComplete = async(req,res) =>{
    try {
        const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
            return res.json({success:true,message:"appointment completed"})
            
        }else{
            return res.json({success:false,message:"mark failed"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

//api to cancel appointment completed 
const appointmentCancel = async(req,res) =>{
    try {
        const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
            return res.json({success:true,message:"appointment cancelled"})
            
        }else{
            return res.json({success:false,message:"cancel failed"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

//api for doctor dashboard will soon uploaded

//api for doctor profile

const doctorProfile = async(req,res) =>{
    try {
        const {docId} = req.body
        const profileData = await doctorModel.findById(docId).select('-password')
        res.json({success:true,profileData})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

//api to update profile of doctor
const updateDoctorProfile = async(req,res) =>{

    try {
        const {docId , fees , address , available} = req.body
        await doctorModel.findByIdAndUpdate(docId,{fees,address,available})

        res.json({success:true,message:"profile updated"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

export {changeAvailablity,doctorList,loginDoctor,appointmentsDoctor,appointmentCancel,appointmentComplete,doctorProfile,updateDoctorProfile}