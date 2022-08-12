import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <section style={{
            background:`url(${bg})`,
           }}>
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
  <img src={chair} class="w-[378px] md:w-[612px]" />
    <div className='mx-10'>
      <DayPicker
      mode='single'
      selected={date}
      onSelect={setDate}
      ></DayPicker>
      
    </div>
  </div>
</div>
        </section>
        
    );
};

export default AppointmentBanner;