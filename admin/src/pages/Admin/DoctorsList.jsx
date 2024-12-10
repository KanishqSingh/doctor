import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll bg-gray-100 p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">All Doctors</h1>
      <div className="space-y-4">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={item.image}
              alt={`${item.name}`}
              className="w-16 h-16 rounded-full object-cover border border-gray-300"
            />
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-700">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>

              <div className="flex items-center gap-2">
                <input onChange={()=>changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                  // className="w-4 h-4 text-green-600 border-gray-300 focus:ring-2 focus:ring-green-400"
                  // readOnly
                />
                <p className="text-sm text-gray-600">{item.available ? 'Available' : 'Unavailable'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
