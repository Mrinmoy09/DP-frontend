import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { Navigate, useLocation } from 'react-router-dom';

const Banner = () => {
  const location = useLocation();
   const handleNavigate = () => {
    return <Navigate to="/appointment" state={{ from: location }}></Navigate>
   }
    return (
     <section style={{
      background:`url(${bg})`,
     }}>
              <div class="hero min-h-screen bg-base-FFFFFF px-12 pb-0">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="w-[378px] md:w-[612px]" />
    <div>
      <h1 class="text-5xl font-bold text-accent">Your new smile starts <br /> here</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button onClick={handleNavigate} class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get started</button>
    </div>
  </div>
</div>
     </section>
    );
};

export default Banner;