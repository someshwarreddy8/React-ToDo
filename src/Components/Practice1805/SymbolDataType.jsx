import React from 'react'

const SymbolDataType = () => {

    var id = Symbol('id');

    var obj = {
        [id]: 1,
        name: 'xyz',
        age: 26,
        area: 'Jangaon',
        education: 'MSC'
    }

    return (
        <div>
            <ol>
                {Object.keys(obj).map(key => <li key={key}>{obj[key]}</li>)}

                <hr />

                {Object.keys(obj).map(key => <li key={key}>{obj[key] == 'xyz' ? <span>true</span> : <span>false</span>}</li>)}
            </ol>
        </div>
    )
}

export default SymbolDataType