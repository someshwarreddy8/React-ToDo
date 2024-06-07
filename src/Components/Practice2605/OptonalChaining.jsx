import React from 'react'

const OptonalChaining = () => {
    var obj = {
        name: 'somesh',
        dog: {
            color: 'red',
            age: 2
        }
    }
    return (
        <div className='container-fluid'>
            <div>
                <ol>
                    {Object.keys(obj).map(key => {
                        return typeof obj[key] === 'object' ?
                            Object.keys(obj[key]).map(nKey => (<li key={nKey}>{obj[key][nKey]}</li>))
                            : <li key={obj[key]}>{obj[key]}</li>
                    })}
                </ol>
            </div>
            <div>
                <small>{obj.dog?.color ? <small>{obj.dog.color && <span>presnet</span>}</small> : <span>Element not present</span>}</small>
        </div>
        </div >
    )
}

export default OptonalChaining