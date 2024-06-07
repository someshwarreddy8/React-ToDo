import React, { useRef } from 'react'

const UseRefHook = () => {
    var data = useRef(null);

    var handleSubmit = (e) => {
        data.current.focus();
    }

    return (
        <div className='container-fluid text-center input-group'>
            <input className='input-group-text' type="text" ref={data} placeholder='Focus me with the button' />
            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UseRefHook