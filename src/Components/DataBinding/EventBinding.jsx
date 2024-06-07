import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import StyleIcon from '@mui/icons-material/Style';

const EventBinding = () => {

    const [clsNames, setClsNames] = useState('d-none');
    const [changeData, setChangeData] = useState('');

    var handleOnclick = () => {
        setClsNames('d-block')
    }

    var handleOnChange = (e) => {
        setChangeData(e.target.value);
    }

    return (
        <div className='container-fluid' style={{ 'margin-top': '80px' }}>
            <div className='d-flex justify-content-center bg bg-danger'>
                <div>
                    <Typography className='text-white'>Event Binding</Typography>
                </div>

                <div>
                    <StyleIcon color='action' />
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                    <Button onClick={handleOnclick} variant='contained' size='small' color='error' className='my-2'>EventBinding</Button>

                    <div className={clsNames}>
                        <Typography>Hidden content of event binding....</Typography>
                    </div>
                </div>

                <div className='col-8 mt-3'>
                    <TextField label='Content' onChange={handleOnChange} />
                    <p>{changeData}</p>
                </div>
            </div>
        </div>
    )
}

export default EventBinding