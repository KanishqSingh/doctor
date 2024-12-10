import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";


const AllAppointments = () => {
  const { aToken, getAllAppointments, appointments, cancelAppointment } = useContext(AdminContext);
  const { calculateAge } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  console.log("Appointments:", appointments); // Debugging appointments

  if (!appointments) {
    return <p className="text-center text-gray-500">Loading appointments...</p>;
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
        All Appointments
      </h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        {/* Table Header */}
        <div className="grid grid-cols-4 sm:grid-cols-7 bg-gray-200 text-gray-700 font-medium py-3 px-4 border-b text-sm sm:text-base">
          <p>#</p>
          <p>Patient</p>
          {/* <p className="hidden sm:block">Age</p> */}
          <p>Date & Time</p>
          <p className="hidden md:block">Doctor Appointed</p>
          <p className="hidden lg:block">Fee</p>
          <p>Action</p>
        </div>

        {/* Table Rows */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 sm:grid-cols-7 items-center py-3 px-4 border-b hover:bg-gray-100 transition text-sm sm:text-base"
          >
            <p>{index + 1}</p>
            <div className="flex items-center space-x-3">
              <img
                src={item.userData.image}
                alt={`${item.userData.name}`}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              />
              <p className="text-gray-800 font-medium truncate">
                {item.userData.name}
              </p>
            </div>
            {/* <p className="hidden sm:block">{calculateAge(item.userData.dob)}</p> */}

            <p>{item.slotDate} {item.slotTime}</p>
            <p className="flex items-center gap-2"><img className="w-8 rounded-full bg-gray-200" src={item.docData.image} alt="" />{item.docData.name}</p>
            <p className="hidden lg:block">₹{item.docData.fee}</p>

            {
              item.cancelled ? <p className="text-red-400 trxt-sm font-medium"> Cancelled</p> : item.isCompleted ? <p className="text-green-400 trxt-sm font-medium">Completed</p> : <img className="w-10 cursor-pointer" onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt="" />

            }

          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
