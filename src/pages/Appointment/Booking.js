import React from 'react';

const Booking = ({service , setTreatment}) => {
    const {name,slots} = service
    return (
        <>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body text-center">
    <h2 class="card-title text-primary justify-center text-xl font-bold">{name}</h2>
    <p>
        {slots.length
        ?<span>{slots[0]}</span>
        :
        <span className='text-red-500'>No Slots available</span>}
    </p>
    <p className='text-lg'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe</p>
    <div class="card-actions justify-center">
      <label for="booking-modal"
      disabled={slots.length===0} 
      onClick={()=>setTreatment(service)}
      class="btn btn-secondary text-white uppercase">Book now</label>
    </div>
  </div>
</div>
        </>
    );
};

export default Booking;