import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Booking from './Booking';
import BookingModal from './BookingModal';


const AvailableAppointments = ({date}) => {
    const [services,setServices] = useState([])
    const [treatment,setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <section>
        <div className='mt-5'>
            <h4 className='text-primary text-center font-bold lg:text-3xl '>Available Appointments on {format(date,'PP')}</h4>
            <h2 className='text-lg font-bold text-gray-500 text-center'>Please Select a Service</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {services.map(service=><Booking key={service._id} service={service} setTreatment={setTreatment}></Booking>)}
        </div>
        {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} date={date}></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;