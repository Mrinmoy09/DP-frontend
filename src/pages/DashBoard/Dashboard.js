import React from 'react';
import { Outlet ,Link} from "react-router-dom";

const Dashboard = () => {
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
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;