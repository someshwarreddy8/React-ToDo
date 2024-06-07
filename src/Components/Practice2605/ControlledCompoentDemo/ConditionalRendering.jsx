import React, { useEffect, useRef, useState } from 'react';
import componentRendered from './componentRendered';

const ConditionalRendering = () => {
    const [flag, setFlag] = useState(true);
    const flagVal = useRef(null);

    var handleChange = (e) => {
        if (e.target.value === 'true') {
            setFlag(flag);
        } else {
            setFlag(!flag);
        }

    }

    useEffect(() => {

    }, [flag]);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4 border border-2 d-flex justify-content-center align-items-center' style={{ height: '150px' }}>
                    <select name="FlagController" onChange={handleChange}>
                        <option value="true">true</option>
                        <option value="false" selected>false</option>
                    </select>
                </div>

                <div className='col-8 border border-2 d-flex justify-content-center align-items-center' style={{ height: '150px' }}>
                    <div>
                        {flag && <ConditionalRendering />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConditionalRendering