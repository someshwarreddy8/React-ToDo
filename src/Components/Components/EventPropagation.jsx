import React from 'react'

const EventPropagation = () => {
    var handleParent = (e) => {
        console.log('this is parent funtion')
    }
    var handleChild = (e) => {
        console.log('this is child funtion')
    }
    var handleGrandChild = (e) => {
        e.stopPropagation();
        console.log('this is GrandChild funtion')
    }
    return (
        <div>
            <div onClick={handleParent} className='bg bg-dark p-4 m-2 text-white'>Parent
                <div onClick={handleChild} className='bg bg-warning p-4 m-2'>Child
                    <div onClick={handleGrandChild} className='bg bg-danger p-4 m-2'>GrandChild</div>
                </div>
            </div>
        </div>
    )
}

export default EventPropagation