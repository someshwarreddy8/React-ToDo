import React, { useState } from 'react';
import { Button, Typography, TextField } from '@mui/material';

const EventCustomArgs = () => {

    const [data, setData] = useState('');

    var handleOnClick = (e, custData) => {
        setData(`${custData} : ${e.target.value}`);
    }

    return (
        <div className='container-fluid mt-4 d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <TextField onChange={(e) => handleOnClick(e, 'Custom Data')} label='Enter Data' />
            <Typography variant='h4'>{data}</Typography>
        </div>
    )
}

export default EventCustomArgs