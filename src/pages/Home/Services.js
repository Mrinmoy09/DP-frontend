import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    
    const services = [
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aspernatur facilis ipsa. Natus quibusdam nihil!",
            img:fluoride
        },
        {
            _id:2,
            name:"Cavity Filling",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aspernatur facilis ipsa. Natus quibusdam nihil!",
            img:cavity
        },
        {
            _id:3,
            name:"Teeth Whitenning",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aspernatur facilis ipsa. Natus quibusdam nihil!",
            img:whitening
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
            <h3 className='text-primary text-2xl font-bold uppercase font-sans'>Our services</h3>
            <h2 className='text-accent text-4xl font-sans'>Services We provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 ml-8 px-5 my-2'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;