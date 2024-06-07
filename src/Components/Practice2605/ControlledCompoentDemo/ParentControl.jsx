import React, { useState } from 'react'
import ControlledComp from './ControlledComp';

const ParentControl = () => {
    const [name, setName] = useState('');
    var handleUserName = (e) => {
        setName(e.target.value);
    }

    var obj = {
        name: 'raj',
        rollNo: 23,
        phone: '+91 987654321'
    }

    return (
        <div className='text-center'>
            <form>
                <p>userName : {name}</p>
                <input type="text" name="UserName" id="" onChange={handleUserName} />
                <ControlledComp userName={name} handleNameChange={handleUserName} userData={obj} />
            </form>
        </div>
    )
}

export default ParentControl