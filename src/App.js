import './App.css';
import NavBar from './pages/Shared/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login'
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    
    <div className='px-10'>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment/>} />
        <Route path="login" element={<Login/>} />
        
      </Routes>
    </div>
  );
}

export default App;
