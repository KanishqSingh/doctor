import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 year')
    const [fee, setFee] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const {backendURL , aToken} = useContext(AdminContext)

    console.log('backendURL',backendURL);
    console.log('aToken',aToken);
    

    const onSubmitHandler = async(event)=>{
        event.preventDefault()

        try {
            if (!docImg) {
                console.log("image not found")
                return toast.error('Image not found');

                
            }

            const formData = new FormData()
            formData.append('image',docImg)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('experience',experience)
            formData.append('fee',Number(fee))
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('degree',degree)
            formData.append('address',JSON.stringify({line1:address1,line2:address2}))

            // console log form data

            formData.forEach((value,key)=>{
                console.log(`${key} : ${value}`);

            })

            const {data} = await axios.post(backendURL + '/api/admin/add-doctor',formData,{headers:{aToken}})

            if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFee('')
                
            } else{
                toast.error(data.message)
            }

            
            


        } catch (error) {
            toast.error(error.message)
            console.log('error')
            
        }

    }

    return (
        <form className="m-5 w-full" onSubmit={onSubmitHandler}>
            <p className="mb-3 text-lg font-medium">Add Doctor</p>
            <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
                <div className="flex items-center gap-4 mb-8 text-gray-500">
                    <label htmlFor="doc-img">
                        <img
                            className="w-16 bg-gray-100 rounded-full cursor-pointer"
                            src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                            alt=""
                        />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>
                        Upload Doctor <br /> picture{' '}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <div className="mb-4">
                            <p>Doctor Name</p>
                            <input onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="w-full p-2 border rounded"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <p>Doctor Email</p>
                            <input onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="w-full p-2 border rounded"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <p>Doctor Password</p>
                            <input onChange={(e) => setPassword(e.target.value)}
                               value={password}

                                className="w-full p-2 border rounded"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <p>Experience</p>
                            <select onChange={(e)=>setExperience(e.target.value)} value={experience} className="w-full p-2 border rounded">
                                <option value="1 year">1 year</option>
                                <option value="2 year">2 year</option>
                                <option value="3 year">3 year</option>
                                <option value="4 year">4 year</option>
                                <option value="5 year">5 year</option>
                                <option value="6 year">6 year</option>
                                <option value="7 year">7 year</option>
                                <option value="8 year">8 year</option>
                                <option value="9 year">9 year</option>
                                <option value="10 year">10 year</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <p>Fee:</p>
                            <input onChange={(e)=>setFee(e.target.value)}
                                value={fee}
                                className="w-full p-2 border rounded"
                                type="number"
                                placeholder="Enter Fee"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-4">
                            <p>Speciality</p>
                            <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className="w-full p-2 border rounded">
                                <option value="General physician">General physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <p>Education</p>
                            <input onChange={(e)=>setDegree(e.target.value)}
                                value={degree}
                                className="w-full p-2 border rounded"
                                type="text"
                                placeholder="Education"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <p>Address</p>
                            <input onChange={(e)=>setAddress1(e.target.value)}
                                value={address1}
                                className="w-full p-2 border rounded mb-2"
                                type="text"
                                placeholder="Address 1"
                            />
                            <input onChange={(e)=>setAddress2(e.target.value)}
                                value={address2}
                                className="w-full p-2 border rounded"
                                type="text"
                                placeholder="Address 2"
                            />
                            {/* continue from here */}
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <p>About Doctor</p>
                    <textarea onChange={(e)=>setAbout(e.target.value)}
                        value={about}
                        className="w-full p-2 border rounded"
                        placeholder="Write about doctor"
                        rows={5}
                    ></textarea>
                </div>

                <button className="bg-primary text-white mt-4 px-6 py-2 rounded-full">Add Doctor</button>
            </div>
        </form>
    );
};

export default AddDoctor;
