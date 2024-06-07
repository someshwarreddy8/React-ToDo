import React, { useState } from 'react'

const FormPreventDefault = () => {
    const [inputVal, setInputVal] = useState();
    var handleClick = (e) => {
        e.preventDefault();
    }

    var handleValueChange = (e) => {
        setInputVal(e.target.value);
    }
    return (
        <div>
            <div>FormPreventDefault</div>
            <form onClick={handleClick}>
                <div className='input-group'>
                    <input onChange={handleValueChange} autoComplete='off' className='input-group-text' type="text" name="userName" id="" placeholder='Enter name....' />
                    <button className='btn btn-danger' type='submit'>Submit</button>
                </div>
            </form>

            <section>
                <p> {inputVal}</p>
            </section>
        </div>
    )
}

export default FormPreventDefault