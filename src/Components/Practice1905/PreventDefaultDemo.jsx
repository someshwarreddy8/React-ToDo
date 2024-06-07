import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const PreventDefaultComp = () => {
    var handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit clicked...')
    }
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <form onSubmit={handleSubmit}>
                <Typography variant='h5'><PersonIcon fontSize='large' color='primary' /> User Login</Typography>
                <TextField name='UserName' label='UserName' className='my-2' /> <br />
                <TextField name='password' label='password' className='my-2' /> <br />
                <Button type='submit' variant='contained' color='success' size='small'>Submit</Button>
            </form>
        </div>
    )
}

export default PreventDefaultComp;