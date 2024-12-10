import React, { useContext } from 'react';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList'
import { DoctorContext } from './context/DocterContext';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
    const {aToken } = useContext(AdminContext)
    const {dToken} =useContext(DoctorContext)

    console.log('aToken:', aToken); 

    return aToken || dToken ? (
        <div className='bg-[#F8f9fd'>
            {
                aToken ? <h1>Welcome Admin!</h1> : <h1>Welcome Doctor!</h1>
            }
            <ToastContainer />
            <Navbar/>
            <div className='flex items-start'>
              <Sidebar/>
              
              <Routes>
                <Route path='/' element={<></>}></Route>
                <Route path='/admin-dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/all-appointments' element={<AllAppointments></AllAppointments>}></Route>
                <Route path='/add-doctor' element={<AddDoctor></AddDoctor>}></Route>
                <Route path='/doctor-list' element={<DoctorsList></DoctorsList>}></Route>
                {/* Doctor Routes */}
                <Route path='/doctor-appointment' element={<DoctorAppointment></DoctorAppointment>}></Route>
                <Route path='/doctor-dashboard' element={<DoctorDashboard></DoctorDashboard>}></Route>
                <Route path='/doctor-profile' element={<DoctorProfile></DoctorProfile>}></Route>

              </Routes>
            </div>

        </div>
    ) : (
        <>
            <Login />
            <ToastContainer />
        </>
    );
};

export default App;
