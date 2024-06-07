import React from 'react'
import { createContext } from 'react'
import ChildOne from './ChildOne';

export const context = createContext(null);

const ParentContext = () => {
    const studentDetails = {
        sName: 'XYZ',
        sRollNo: 29,
        address: {
            village: 'Thammadapalli',
            Dist: 'Warangal'
            
        }
    }
    return (
        <div className='container-fluid'>
            <h4>Parent component..!!!</h4>

            <context.Provider value={studentDetails}>
                <ChildOne />
            </context.Provider>

        </div>
    )
}

export default ParentContext