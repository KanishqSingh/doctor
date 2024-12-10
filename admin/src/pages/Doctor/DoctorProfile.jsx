import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DocterContext';
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'

const DoctorProfile = () => {
  const { dToken, profile, getProfileData ,setProfile } = useContext(DoctorContext);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [isEdit,setIsEdit] = useState(false)

  const updateProfile = async () => {
    try {
      // Prepare updated data
      const updateData = {
        address: profile.address,
        fee: profile.fee,
        available: profile.available,
      };
  
      // Make the request to update the profile
      const { data } = await axios.post(
        `${backendURL}/api/doctor/update-profile`,
        updateData,
        { headers: { dToken } }
      );
  
      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
  
        // Fetch the latest profile data to reflect changes
        await getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };
  

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return profile ? (
    <div className="max-w-4xl mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-5 items-start bg-white p-6 rounded-lg shadow-md">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile.image || `${backendURL}/default-profile.png`}
            alt={`${profile.name || 'Doctor'} profile`}
            className="w-40 h-40 rounded-full object-cover border border-gray-300"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <p className="text-2xl font-bold text-gray-800">{profile.name || 'N/A'}</p>

          {/* Degree and Speciality */}
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <p>{profile.degree || 'N/A'} - {profile.speciality || 'N/A'}</p>
            <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm">
              {profile.experience || 0} years
            </button>
          </div>

          {/* About Section */}
          <div className="mt-4">
            <p className="font-medium text-gray-700">About</p>
            <p className="text-gray-600">{profile.about || 'No information provided.'}</p>
          </div>

          {/* Appointment Fee */}
          <p className="mt-4 text-gray-700">
            Appointment Fee: <span className="font-semibold">{ isEdit ? <input type="number" onChange={(e)=>setProfile(prev => ({...prev,fee:e.target.value}))} value={profile.fee}/> : profile.fee }</span>
          </p>

          {/* Address Section */}
          <div className="mt-4">
            <p className="font-medium text-gray-700">Address</p>
            <p className="text-gray-600">
              { isEdit ? <input type="text" onChange={(e)=>setProfile(prev => ({...prev,address:{...prev.address,line1:e.target.value}}))}  value={profile.address.line1}/> :  profile.address?.line1 }
              <br />
              { isEdit ? <input type="text" onChange={(e)=>setProfile(prev => ({...prev,address:{...prev.address,line2:e.target.value}}))}  value={profile.address.line2}/> : profile.address?.line2 || ''}
            </p>
          </div>

          {/* Availability */}
          <div className="mt-4 flex items-center gap-2">
            <input onChange={()=>isEdit && setProfile(prev => ({...prev,available:!prev.available}))}
              type="checkbox"
              id="availability"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={profile.available}
              readOnly
            />
            <label htmlFor="availability" className="text-gray-700">
              Available
            </label>
          </div>

          {
            isEdit ? 
          
          <button onClick={updateProfile} className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700">
            Save
          </button>:
          <button onClick={()=>setIsEdit(true)} className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700">
            Edit
          </button>}
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center p-5 text-gray-500">Loading profile...</div>
  );
};

export default DoctorProfile;
