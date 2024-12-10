import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol='₹'
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors] = useState([])
    const [token , setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    console.log(token)

    const [userData,setUserData] = useState(false)
    


    const getDoctorsData = async() =>{
        try {
            const {data} = await axios.get(backendURL + '/api/doctor/list')
            
            
            if(data.success){
                setDoctors(data.doctors)

            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }

    }

    const loadUserProfileData = async() =>{
        try {
            const {data} = await axios.get(backendURL + '/api/user/get-profile',{headers:{token}})

            console.log(data);
            if (data.success) {
                setUserData(data.userData)
                
            } else{
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }

    // const changeAvailability = async(docId)=>{
    //     try {
    //         const {data} = await axios.post(backendURL + '/api/admin/change-availability' , {docId} , {headers:{aToken}})
    //         if(data.success){
    //             toast.success(data.message)
    //             getAllDoctors()
    //         } else{
    //             toast.error(data.message)
    //         }
            
    //     } catch (error) {
    //         toast.error(error.message)
            
    //     }
    // }


    const value = {
        doctors,
        getDoctorsData,
        currencySymbol,
        token,
        setToken,
        backendURL,
        userData,
        setUserData,
        loadUserProfileData
        // changeAvailability
    };

    useEffect(()=>{
        getDoctorsData()
    },[])

    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    },[token])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
