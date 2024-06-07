import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AirIcon from '@mui/icons-material/Air';

const EventHandling = () => {
    var [touched, setTouched] = useState('');
    var [classNames, setClassNames] = useState('d-none');

    var handleClick = (e, info) => {
        setTouched(info);
        setClassNames('d-block border border-2')
    }
    return (
        <div className=''>
            <Typography>EventHandling</Typography>

            <Button onClick={(e) => { handleClick(e, 'clicked') }} variant='text' endIcon={<TouchAppIcon />}>
                Clickhere
            </Button>

            <Button className={classNames} variant='outlined' endIcon={<AirIcon />} >{touched}</Button>
        </div>
    )
}

export default EventHandling