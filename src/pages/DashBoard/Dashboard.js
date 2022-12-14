import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet ,Link} from "react-router-dom";
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useDoctor from '../../hooks/useDoctor';

const Dashboard = () => {
  const [user]= useAuthState(auth)
  const [admin] = useAdmin(user)
  const [doctor] = useDoctor(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <h2 className='text-2xl text-purple-500 font-bold'>Welcome to your Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

      <li><Link to="/dashboard">My Appointmets</Link></li>
      <li><Link to="/dashboard/myHistory">My Hisotry</Link></li>
      { admin && <><li><Link to="/dashboard/users">All Users</Link></li>
      <li><Link to="/dashboard/doctors">Add a Doctor</Link></li>
      <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
      </>}
      {
        doctor && <li><Link to="/dashboard/allBooking">All Appointments</Link></li>
      }
      
      
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;