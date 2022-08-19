import { useEffect, useState } from "react"

const useDoctor = user => {
    const [doctor, setDoctor] = useState(false);
    const [doctorLoading, setDoctorLoading] = useState(true);
    useEffect( () =>{
        const role = user?.email;
        if(role){
            fetch(`http://localhost:5000/doctor/${role}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setDoctor(data.role);
                setDoctorLoading(false);
            })
        }
    }, [user])

    return [doctor, doctorLoading]
}

export default useDoctor;