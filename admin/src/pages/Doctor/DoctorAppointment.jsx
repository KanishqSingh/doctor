import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DocterContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const DoctorAppointment = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext);
  const { calculateAge } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <p className="mb-3 text-lg font-semibold text-gray-700">All Appointments</p>
      <div className="bg-white border rounded shadow-sm text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        {/* Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-2 py-3 px-6 border-b bg-gray-50">
          <p className="font-medium text-gray-600">S.No</p>
          <p className="font-medium text-gray-600">Patient</p>
          <p className="font-medium text-gray-600">Payment</p>
          <p className="font-medium text-gray-600">Age</p>
          <p className="font-medium text-gray-600">Date | Time</p>
          <p className="font-medium text-gray-600">Fee</p>
          <p className="font-medium text-gray-600">Action</p>
        </div>

        {/* Appointments List */}
        {appointments.length > 0 ? (
          appointments.reverse().map((item, index) => (
            <div
              key={index}
              className="grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] grid-cols-1 gap-2 py-3 px-6 border-b items-center text-gray-700"
            >
              <p className="font-medium">{index + 1}</p>

              {/* Patient Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.userData.image || assets.default_user}
                  alt={`${item.userData.name} profile`}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <p>{item.userData.name}</p>
              </div>

              {/* Payment */}
              <p className="capitalize">{item.payment ? 'Online' : 'Offline'}</p>

              {/* Age */}
              <p>{calculateAge(item.userData.dob)}</p>

              {/* Date and Time */}
              <p>
                {item.slotDate}, {item.slotTime}
              </p>

              {/* Fee */}
              <p>${item.amount}</p>

              {
                item.cancelled ? <p>Cancelled</p> : item.isCompleted ? <p>Completed</p> : <div className="flex items-center gap-2">
                  <button
                    className="p-2 bg-red-100 hover:bg-red-200 rounded-full"
                    aria-label="Cancel appointment"
                  >
                    <img onClick={() => cancelAppointment(item._id)} src={assets.cancel_icon} alt="Cancel icon" className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 bg-green-100 hover:bg-green-200 rounded-full"
                    aria-label="Approve appointment"
                  >
                    <img onClick={() => completeAppointment(item._id)} src={assets.tick_icon} alt="Approve icon" className="w-5 h-5" />
                  </button>
                </div>
              }

              {/* Actions */}

            </div>
          ))
        ) : (
          <div className="text-center p-5 text-gray-500">No appointments found.</div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointment;
