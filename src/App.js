import './App.css';
import NavBar from './pages/Shared/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login'
import Appointment from './pages/Appointment/Appointment';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/DashBoard/Dashboard';
import MyAppointments from './pages/DashBoard/MyAppointments';
import MyHistory from './pages/DashBoard/MyHistory';
import Users from './pages/DashBoard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';
import AddDoctor from './pages/DashBoard/AddDoctor'
import ManageDoctors from './pages/DashBoard/ManageDoctors';
import RequireDoctor from './pages/Login/ReqireDoctor';
import ShowAppointments from './pages/DashBoard/ShowAppointments';


function App() {
  return (
    
    <div className='px-10'>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<RequireAuth>
          <Appointment/>
        </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='myHistory' element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="doctors" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctors" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
          <Route path='allBooking' element={<RequireDoctor><ShowAppointments></ShowAppointments></RequireDoctor>}></Route>
          
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path='signup' element={<SignUp/>} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
