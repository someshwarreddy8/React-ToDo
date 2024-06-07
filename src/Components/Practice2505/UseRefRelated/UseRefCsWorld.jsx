import React, { useRef } from 'react'
import { Typography } from '@mui/material'

const UseRefCsWorld = () => {

    const data = useRef(null);

    return (
        <div className='container-fluid text-center'>
            <Typography ref={data} variant='h4'>Header Content</Typography>

            <button onClick={() => {
                data.current.innerHTML = "changed content.";
                console.log(data.current.innerHtml = "changed content.")
            }
            }>Click here</button>
        </div>
    )
}

export default UseRefCsWorld