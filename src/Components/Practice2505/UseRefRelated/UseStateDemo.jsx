import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';

const UseStateComp = () => {
    const [count, setCount] = useState(0);
    const timerIdRef = useRef(null);

    var increaseCount = (e) => {
        setCount(e => e + 1);
        timerIdRef.current = timerIdRef.current+1;
    }
    var decreaseCount = (e) => {
        setCount(e => e - 1);
        timerIdRef.current = timerIdRef.current-1;
    }

    useEffect(() => {
        console.log('component rendered....')
    }, [count]);

    return (
        <div className='container-fluid text-center'>
            <button onClick={increaseCount} className='bi bi-plus p-2 btn btn-warning'></button>

            <Typography>{timerIdRef.current}</Typography>

            <button onClick={decreaseCount} className='bi bi-dash p-2 btn btn-danger'></button>

        </div>
    )
}

export default UseStateComp;