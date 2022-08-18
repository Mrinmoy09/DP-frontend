import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {useQuery, useMutation } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';


const MyAppointments = () => {

    const [isDeleted,setIsDeleted]= useState(null)
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

   const {refetch} = useQuery();
    
    const { isLoading} = useMutation(handleDelete);

    async function handleDelete(id) {
         await fetch(`http://localhost:5000/booking/${id}`,{
            method:'DELETE',
            headers:{
                    'content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(result => {
                if(result.acknowledged){
                    setIsDeleted(true);
                    alert('Are you sure you want to cancel this Booking?')
                    
                   
                    toast('Your appointment is canceled.')
                }
                else{
                    setIsDeleted(false);
                }
            })
            
        
    }

    

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    
                    setAppointments(data);
                    
                });
        }
    }, [user,isDeleted])

    if(isDeleted){
        refetch();
    }

    if(isLoading){
        return <Loading></Loading>
    }

    

    
    // const handleDelete = async (id) => {
      
    //     await fetch(`http://localhost:5000/booking/${id}`,{
    //         method:'DELETE',
    //         headers:{
    //             'content-type':'application/json'
    //         }
    //     })
    //     .then(res=>res.json())
    //         .then(result=>{
              
            
    //         alert('Are you sure you want to cancel this Booking?');
    //         toast('Your appointment is canceled.')
    // }
        
  


    return (
        <div>
            <h2 className='font-bold'>My Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td><button onClick={()=>handleDelete(a._id)} class="btn btn-xs">Cancel Appointment</button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;