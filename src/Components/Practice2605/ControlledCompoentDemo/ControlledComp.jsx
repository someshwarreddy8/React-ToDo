import React from 'react'

const ControlledComp = (props) => {
    return (
        <div>
            <div>
                <p>userName in controlled component : {props.userName}</p>
                <input className='mt-3' type="text" onChange={props.handleNameChange} />
                <ol className="list-unstyled">
                    {Object.keys(props.userData).map(key => <li>{props.userData[key]}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default ControlledComp