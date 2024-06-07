import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Typography } from '@mui/material';
import { useState } from 'react';
const StyleBindingComp = () => {

    const [styles] = useState({ color: 'green', 'font-size': '20px', 'font-weight': 'bold', 'text-align': 'center' });
    const [booleanVal] = useState(true);
    return (
        <div style={{ 'margin-top': '90px' }}>
            <div className="bg bg-secondary p-2 text-white">
                <div className='d-flex justify-content-around mb-3'>
                    <div>
                        <Typography>Style Binding</Typography>
                    </div>

                    <div>
                        <AutoFixHighIcon />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <Typography style={styles}>Style binding Demo</Typography>
            </div>

            <div style={styles}>
                {booleanVal ? <spa>true</spa> : <span>false</span>}
            </div>
        </div>
    )
}

export default StyleBindingComp;