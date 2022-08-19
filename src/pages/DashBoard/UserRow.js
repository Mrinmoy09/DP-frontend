import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch ,index }) => {

    const { email, role } = user;
    const makeAdmin = () => {
        
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    const makeDoctor = () => {
        fetch(`http://localhost:5000/user/doctor/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make set user as a doctor');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully set as a doctor`);
                }

            })
    }


   
    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            
            <td>{role !== 'admin' ? <><button onClick={makeAdmin} class="btn btn-xs">Make Admin</button></> 
            : <h2 className='text-xl font-bold text-purple-600'>An Admin</h2>}</td>
            <td>{role !== 'doctor' ? <><button onClick={makeDoctor} class="btn btn-xs">Make Doctor</button></> 
            : <h2 className='text-xl font-bold text-purple-600'>A doctor</h2>}</td>
        </tr>
    );
};

export default UserRow;