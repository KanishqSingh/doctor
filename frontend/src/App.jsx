import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />

      <Navbar />

      {/* WE added path for all the pages here */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        <Route path='/doctors/:speciality' element={<Doctors></Doctors>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/my-appointment' element={<MyAppointments></MyAppointments>}></Route>
        <Route path='/appointment/:docId' element={<Appointment></Appointment>}></Route>

      </Routes>
      <Footer />

    </div>
  )
}

export default App