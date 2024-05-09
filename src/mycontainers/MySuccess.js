import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MySuccess() {
    const [count, setCount] = useState(15)
    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => { setCount((count) => count - 1) }, 1000);
        setTimeout(() => {
        navigate('/');
          },  15000);
        }, [navigate]);

    return (
        <h5 className='mt-5'>
        your order have been placed successfully. you will be redirected in {" "}
        {count} seconds</h5>
        );
    }