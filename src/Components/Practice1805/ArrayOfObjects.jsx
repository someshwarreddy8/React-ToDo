import React, { useState } from 'react'

const ArrayOfObjects = () => {
    const [arr] = useState([{ id: 1, name: 'xyz' }, { id: 2, name: 'abc' }, { id: 3, name: 'lmn' }]);
    return (
        <div className='container-fluid'>
            <ol>
                {arr.map(obj1 => obj1 instanceof Object ?

                    Object.keys(obj1).map(key => <li>{obj1[key]}</li>)
                    :
                    <li>{obj1}</li>)}
            </ol>
        </div>
    )
}

export default ArrayOfObjects