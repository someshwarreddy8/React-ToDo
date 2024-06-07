import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';

const UseRefTimerComp = () => {

    const [count, setCount] = useState(0);

    const timerIdRef = useRef(null);

    var startTimer = () => {
        if (timerIdRef.current != null) { return; }
        timerIdRef.current = setInterval(() => {
            setCount(prev => prev + 1);
        }, 200);
    }

    var stopTimer = () => {
        if (timerIdRef.current != null) {
            clearInterval(timerIdRef.current);
            timerIdRef.current = null;  
        }
    }

    useEffect(() => {
        console.log('component rendered...');
    }, [timerIdRef.current]);

    return (
        <div className='container-fluid text-center'>
            <Typography>{count}</Typography>
            <button onClick={startTimer} className='btn btn-warning me-2'>Start timer</button>
            <button onClick={stopTimer} className='btn btn-danger'>Stop timer</button>
        </div>
    )
}

export default UseRefTimerComp