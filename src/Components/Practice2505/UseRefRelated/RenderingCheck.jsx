import { Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

const RenderingCheck = () => {
    const data = useRef(0);
    const [stateVal, setStateVal] = useState(0);
    return (
        <div className='container-fluid d-flex justify-content-center border border-3' style={{ height: '150px' }}>

            <div>
                <button onClick={() => {
                    data.current = data.current + 1;
                    setStateVal(data.current)
                    console.log(data.current)
                }}>Click</button>
            </div>

            <div>
                <Typography> Value is : {stateVal}</Typography> <br />
            </div> <br />
        </div>
    )
}

export default RenderingCheck