import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):''); // Initialize as needed
    const [doctors,setDoctors] = useState([])
    const [appointments,setAppointments] = useState([])
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const getAllDoctors = async()=>{
        try {
            const {data} = await axios.post(backendURL + '/api/admin/all-doctors' ,{} , {headers:{aToken}})
            console.log('here are docs',data);
            
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors);
                
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    const changeAvailability = async(docId)=>{
        try {
            const {data} = await axios.post(backendURL + '/api/admin/change-availability' , {docId} , {headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            } else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    const getAllAppointments = async()=>{
        try {
            const {data} = await axios.get(backendURL + '/api/admin/appointments' , {headers:{aToken}})
            if (data.success) {
                setAppointments(data.appointments)
                
            }else{
                toast.error(error.message)
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    const cancelAppointment = async(appointmentId) =>{
        try {

            const {data} = await axios.post(backendURL + '/api/admin/cancel-appointment',{appointmentId},{headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllAppointments()
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    const value = {
        aToken,
        setAToken,
        backendURL,
        doctors,
        getAllDoctors,
        changeAvailability,
        getAllAppointments,
        setAppointments,
        appointments,
        cancelAppointment
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
