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
        <Route path="login" element={<Login/>} />
        <Route path='signup' element={<SignUp/>} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
