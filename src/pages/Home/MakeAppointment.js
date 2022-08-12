import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center my-8 px-4' style={{
            background:`url(${appointment})`
        }}>
            <div className='flex-1'>
                <img className='mt-[-120px] w-[80%]' src={doctor} alt="" />
            </div>
            <div className='flex-1 space-y-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment</h2>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', 
                    making it look like readable English. 
                    Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;