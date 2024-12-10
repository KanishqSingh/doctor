import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { userData, setUserData, token, backendURL, loadUserProfileData } = useContext(AppContext);
  console.log(userData);
  
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);

      image && formData.append('image', image);

      const { data } = await axios.post(backendURL + '/api/user/update-profile', formData, { headers: { token } });
      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return userData && (
    <div className='max-w-5xl mx-auto p-5  rounded-lg flex gap-10'>
      {/* Left Side: Profile Info */}
      <div className='flex flex-col'>
        {/* Profile Image */}
        <div className='flex flex-col items-center gap-4'>
          {isEdit ? (
            <label htmlFor="image">
              <div className='relative cursor-pointer w-40 h-40 border-4 border-gray-300 rounded shadow-md overflow-hidden'>
                <img
                  className='w-full h-full object-cover opacity-80'
                  src={image ? URL.createObjectURL(image) : userData.image}
                  alt=""
                />
                <div className='absolute inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 text-white'>
                  <span className='text-sm font-medium'>Edit Image</span>
                </div>
              </div>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                hidden
              />
            </label>
          ) : (
            <div className='w-40 h-40 border-4 border-gray-300 rounded shadow-md overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={userData.image}
                alt=""
              />
            </div>
          )}
          {isEdit ? (
            <input
              className='block w-full text-2xl font-medium text-center border-b-2 border-gray-300 focus:border-blue-500 outline-none'
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className='text-2xl font-semibold text-gray-800'>{userData.name}</p>
          )}
        </div>

        <hr className='my-4' />

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold text-gray-700 mb-3'>Contact Information</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-sm font-medium text-gray-600'>Email</label>
              <p className='block w-full bg-gray-100 rounded py-2 px-3 text-gray-600'>{userData.email}</p>
            </div>
            <div>
              <label className='text-sm font-medium text-gray-600'>Phone</label>
              {isEdit ? (
                <input
                  type="text"
                  className='block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p className='block w-full bg-gray-100 rounded py-2 px-3 text-gray-600'>
                  {userData.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Address Info */}
        <div className='mt-5'>
          <h3 className='text-lg font-semibold text-gray-700 mb-3'>Address</h3>
          {isEdit ? (
            <div className='space-y-2'>
              <input
                type="text"
                className='block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                placeholder="Address Line 1"
              />
              <input
                type="text"
                className='block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                placeholder="Address Line 2"
              />
            </div>
          ) : (
            <p className='block w-full bg-gray-100 rounded py-2 px-3 text-gray-600'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>

        {/* Basic Info */}
        <div className='mt-5'>
          <h3 className='text-lg font-semibold text-gray-700 mb-3'>Basic Information</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-sm font-medium text-gray-600'>Gender</label>
              {isEdit ? (
                <select
                  className='block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className='block w-full bg-gray-100 rounded py-2 px-3 text-gray-600'>
                  {userData.gender}
                </p>
              )}
            </div>
            <div>
              <label className='text-sm font-medium text-gray-600'>Birth Date</label>
              {isEdit ? (
                <input
                  type="date"
                  className='block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                />
              ) : (
                <p className='block w-full bg-gray-100 rounded py-2 px-3 text-gray-600'>
                  {userData.dob}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='mt-8 flex justify-center'>
          {isEdit ? (
            <button
              className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
              onClick={() => updateUserProfileData()}
            >
              Save Information
            </button>
          ) : (
            <button
              className='px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition'
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>

      
      <div className='flex-shrink-0 '>
        <img
          className='w-full h-auto rounded-lg '
          src={assets.myprofilelogo}
          alt="Decorative"
        />
      </div>
    </div>
  );
};

export default MyProfile;
