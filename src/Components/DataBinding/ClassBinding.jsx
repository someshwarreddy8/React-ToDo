import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';

const ClassBindingComp = () => {

    const [clsNames] = useState('fs-4 text-danger mx-2 my-2 text-center')

    return (
        <div style={{ 'margin-top': '80px' }}>
            <div className="bg bg-warning d-flex justify-content-center">
                <div>
                    Class Binding
                </div>
                <div>
                    <SchoolIcon color='primary' />
                </div>

            </div>

            <p className={clsNames}>This is a class binding test data....</p>
        </div>
    )
}

export default ClassBindingComp;