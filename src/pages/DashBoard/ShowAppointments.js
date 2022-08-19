import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const ShowAppointments = () => {
    const { data: allBooking, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/appointments', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const updateStatus = (id) => {
        fetch(`http://localhost:5000/appointments/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to approved this appointment');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Appointment is Approved`);
                }

            })
    }
    return (
        <div>
            <h2 className='font-bold'>My Appointments: {allBooking.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBooking.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.patient}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td className='text-green-500 font-bold'>{a.status}</td>
                                <td><button onClick={()=>{updateStatus(a._id)}} class="btn btn-xs">Approve</button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowAppointments;