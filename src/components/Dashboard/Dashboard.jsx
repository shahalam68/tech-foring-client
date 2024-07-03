import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [message,setMessage] = useState(); 
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get("http://localhost:5000/dashboard")
        
        .then(res => {
            if(res.data.valid){
                setMessage((res.data.message))
            }
            else{
                navigate('/')
            }
        })
    })
    return (
        <div>
            <h2>this is dash board{message}</h2>
        </div>
    );
};

export default Dashboard;