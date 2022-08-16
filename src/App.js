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
          
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path='signup' element={<SignUp/>} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
