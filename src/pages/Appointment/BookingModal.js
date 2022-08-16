import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({treatment,date,setTreatment,refetch}) => {
    const {_id,name,slots} = treatment;
    const [user] = useAuthState(auth);
    const formettedDate = format(date,'PP')
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId:_id,
            treatment:name,
            date: formettedDate,
            slot,
            patient:user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking' , {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {

            if(data.success){
                toast(`Appointment is set , ${formettedDate} at ${slot}`)
            }
            else{
                toast.error(`You already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch()
            setTreatment(null);
        })

        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-secondary text-center my-2">{name}</h3>
    <form onSubmit={handleBooking} className='grid space-y-5 justify-items-center'>
    <input type="text" disabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs justify-center" />
    <select name='slot' class="select select-bordered w-full max-w-xs">
    {slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)}
   </select>
    <input type="text" name='name' placeholder="Your name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' placeholder="Email address" disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Submit"  class="btn btn-secondary w-full max-w-xs" />
    </form>
  </div>
  </div>
        </div>
    );
};

export default BookingModal;